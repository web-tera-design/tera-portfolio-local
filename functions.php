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

add_filter('wpcf7_form_elements', function ($content) {
    // input type="submit"をbuttonタグに置換する例
    $content = preg_replace_callback('/<input type="submit"(.*?)\/?>/', function ($matches) {
        // inputタグの属性部分を解析
        preg_match('/value="([^"]*)"/', $matches[1], $label);
        preg_match('/class="([^"]*)"/', $matches[1], $class);
        $label_text = $label[1] ?? '送信';
        $class_attr = $class[1] ?? '';
        // 独自HTMLとして構築
        $button_html = '<button type="submit" class="' . esc_attr($class_attr) . '" aria-label="' . esc_attr($label_text) . '">';
        $button_html .= '<span class="c-button__wrapper">';
        $button_html .= '<span class="c-button__link-text">' . esc_html($label_text) . '</span>';
        $button_html .= '</span></button>';
        return $button_html;
    }, $content);
    return $content;
});
