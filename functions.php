<?php

function theme_enqueue_assets()
{
    // Google Fonts
    wp_enqueue_style(
        'google-fonts', // ←ここを'theme-style'の依存関係と合わせる
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Poppins:wght@700&display=swap',
        array(),
        null
    );

    // Font Awesome
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
        [],
        '6.7.2',
        'all'
    );

    // Swiper
    wp_enqueue_style(
        'swiper',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        [],
        '11.0.0',
        'all'
    );
    wp_enqueue_script(
        'swiper',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        [],
        '11.0.0',
        true
    );

    // GSAP
    wp_enqueue_script(
        'gsap',
        'https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js',
        [],
        '3.12.2',
        true
    );
    wp_enqueue_script(
        'scrolltrigger',
        'https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js',
        ['gsap'],
        '3.12.2',
        true
    );

    // メインCSS
    wp_enqueue_style(
        'theme-style',
        get_template_directory_uri() . '/dist/assets/css/style.css',
        ['google-fonts', 'font-awesome', 'swiper'],
        filemtime(get_theme_file_path('/dist/assets/css/style.css')),
        'all'
    );

    // メインJS
    wp_enqueue_script(
        'theme-script',
        get_template_directory_uri() . '/dist/assets/js/script.js',
        ['swiper', 'gsap', 'scrolltrigger', 'jquery'],
        filemtime(get_theme_file_path('/dist/assets/js/script.js')),
        true
    );
}
add_action('wp_enqueue_scripts', 'theme_enqueue_assets');
add_action('send_headers', function () {
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
});

add_filter('script_loader_tag', function ($tag, $handle, $src) {
    return str_replace(" type='text/javascript'", '', $tag);
}, 10, 3);

add_filter('style_loader_tag', function ($tag, $handle) {
    return str_replace(" type='text/css'", '', $tag);
}, 10, 2);

add_action('template_redirect', function () {
    ob_start(function ($html) {
        $html = str_replace(" type='text/css'", '', $html);
        $html = str_replace(' type="text/css"', '', $html);
        $html = str_replace(" type='text/javascript'", '', $html);
        $html = str_replace(' type="text/javascript"', '', $html);
        return $html;
    });
});
