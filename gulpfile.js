const fs = require("fs");
const path = require("path");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const newer = require("gulp-newer");
const webp = require("gulp-webp").default;
const baseDir = "./src/assets/sass";
const scssDirs = [
  "foundation",
  "layout",
  "component",
  "project",
  "utility",
  // 他に必要なディレクトリ
];

// SCSS → CSS
function compileSass() {
  return gulp
    .src("./src/assets/sass/style.scss", { sourcemaps: true })
    .pipe(plumber({ errorHandler: notify.onError("Sass Error: <%= error.message %>") }))
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/assets/css", { sourcemaps: "." }));
}

// HTMLコピー
function copyHtml() {
  return gulp
    .src("./src/**/*.html") // src/index.html に置いてるなら "./src/index.html"
    .pipe(gulp.dest("./dist"));
}

// JS → minify
function compileJs() {
  return gulp
    .src("./src/assets/js/script.js", { sourcemaps: true })
    .pipe(plumber({ errorHandler: notify.onError("JS Error: <%= error.message %>") }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/js", { sourcemaps: "." }));
}

// 画像はそのまま dist にコピー
function copyImages() {
  return gulp
    .src(
      ["./src/assets/img/**/*.{svg,webp}", "!./src/assets/img/**/.DS_Store"],
      { encoding: false } // バイナリファイルとして処理
    )
    .pipe(newer("./dist/assets/img")) // ← 追加
    .pipe(plumber({ errorHandler: notify.onError("Image Copy Error: <%= error.message %>") }))
    .pipe(gulp.dest("./dist/assets/img"));
}

// 画像変換
function convertToWebp() {
  return gulp
    .src(["./src/assets/img/**/*.{jpg,jpeg,png}", "!./src/assets/img/**/.DS_Store"], { encoding: false })
    .pipe(newer({ dest: "./dist/assets/img", ext: ".webp" })) // ← 追加
    .pipe(plumber({ errorHandler: notify.onError("WebP Convert Error: <%= error.message %>") }))
    .pipe(webp({ quality: 90 })) // オプションで画質指定も可能
    .pipe(gulp.dest("./dist/assets/img"));
}

// ===============================================
// # SCSSパーシャル自動生成
// ===============================================
function generateIndexScss(done) {
  scssDirs.forEach((dir) => {
    const fullPath = path.join(baseDir, dir);
    if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
      let files = fs
        .readdirSync(fullPath)
        .filter((file) => file.endsWith(".scss") && file !== "index.scss")
        .sort();

      files.forEach((file) => {
        const filePath = path.join(fullPath, file);
        let fileContent = fs.readFileSync(filePath, "utf8");

        const importLine = "@use '../global' as *;";
        const normalizedContent = fileContent.replace(/\s+/g, " ").trim();
        const alreadyIncluded = normalizedContent.includes("@use '../global' as *;") || normalizedContent.includes('@use "../global" as *;');

        if (!alreadyIncluded) {
          const newContent = `${importLine}\n${fileContent}`;
          // ここで内容が変わる場合だけ書き込む
          if (newContent !== fileContent) {
            fs.writeFileSync(filePath, newContent, "utf8");
          }
        }
      });

      const importStatements = files.length > 0 ? files.map((file) => `@use "${file.replace(".scss", "")}";`).join("\n") : "";
      const indexScssPath = path.join(fullPath, "index.scss");
      const newIndexContent = `/* Auto-generated index.scss for ${dir} */\n${importStatements}\n`;

      // index.scssも内容が変わる場合だけ書き込む
      if (!fs.existsSync(indexScssPath) || fs.readFileSync(indexScssPath, "utf8") !== newIndexContent) {
        fs.writeFileSync(indexScssPath, newIndexContent);
      }
    }
  });
  done();
}

// 自動リロード
function reload(done) {
  browserSync.reload();
  done();
}

// ローカルサーバー
function serve(done) {
  browserSync.init({
    proxy: "tera-portfolio.local",
    notify: false,
  });
  done();
}

// 監視
function watchFiles() {
  gulp.watch("./src/assets/sass/**/*.scss", gulp.series(generateIndexScss, compileSass, reload));
  gulp.watch("./src/assets/js/**/*.js", gulp.series(compileJs, reload));
  gulp.watch(
    "./src/assets/img/**/*.{jpg,jpeg,png,svg,webp}",
    gulp.series(copyImages, convertToWebp, reload) // ← ここでWebPも同時に
  );
  gulp.watch("./src/**/*.html", gulp.series(copyHtml, reload)); // ★ここ！
  gulp.watch("./**/*.php", reload); // 今は "./*.php"
}

// タスク
exports.sass = compileSass;
exports.js = compileJs;
exports.default = gulp.series(
  generateIndexScss, // ← ここを追加
  gulp.parallel(compileSass, compileJs, copyImages, convertToWebp, copyHtml), // 初回もWebP生成
  serve,
  watchFiles
);
// exports.convertToWebp = convertToWebp;
// exports.generateIndexScss = generateIndexScss;
exports.build = gulp.series(generateIndexScss, gulp.parallel(compileSass, compileJs, copyImages, convertToWebp));
