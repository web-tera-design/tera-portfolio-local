<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

    <?php
    // タイトル
    $page_title = function_exists('wp_get_document_title') ? wp_get_document_title() : wp_title('|', false, 'right') . get_bloginfo('name');
    // description
    if (is_singular() && has_excerpt()) {
        $description = get_the_excerpt();
    } else {
        $description = get_bloginfo('description');
    }
    // OGP画像
    if (is_singular() && has_post_thumbnail()) {
        $og_image = get_the_post_thumbnail_url(null, 'full');
    } else {
        $og_image = get_template_directory_uri() . '/img/og-image.jpg';
    }
    // OGP URL
    $og_url = is_singular() ? get_permalink() : home_url();
    ?>

    <title><?php echo esc_html($page_title); ?></title>
    <meta name="description" content="<?php echo esc_attr($description); ?>" />

    <!-- OGP設定 -->
    <meta property="og:title" content="<?php echo esc_attr($page_title); ?>" />
    <meta property="og:description" content="<?php echo esc_attr($description); ?>" />
    <meta property="og:type" content="<?php echo is_singular() ? 'article' : 'website'; ?>" />
    <meta property="og:url" content="<?php echo esc_url($og_url); ?>" />
    <meta property="og:image" content="<?php echo esc_url($og_image); ?>" />

    <!-- Twitterカード -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo esc_attr($page_title); ?>" />
    <meta name="twitter:description" content="<?php echo esc_attr($description); ?>" />
    <meta name="twitter:image" content="<?php echo esc_url($og_image); ?>" />

    <!-- canonical -->
    <link rel="canonical" href="<?php echo esc_url($og_url); ?>" />

    <!-- noindexは本番以外でのみ -->
    <?php if (wp_get_environment_type() !== 'production') : ?>
        <meta name="robots" content="noindex, nofollow" />
    <?php endif; ?>

    <?php wp_head(); ?>
</head>

<body <?php body_class('l-body loading'); ?>>
    <header class="l-header">
        <div class="l-header__inner l-section__inner--wide">
            <h1 class="l-header__logo">
                <a href="" class="l-header__logo-link">
                    Tera’s portfolio
                </a>
            </h1>
            <nav class="l-header__nav">
                <ul class="c-global-nav u-mr30">
                    <li class="c-global-nav__item">
                        <a href="#works" class="c-global-nav__link" data-section="works">実績紹介</a>
                    </li>
                    <li class="c-global-nav__item">
                        <a href="#service" class="c-global-nav__link" data-section="service">提供サービス</a>
                    </li>
                    <li class="c-global-nav__item">
                        <a href="#process" class="c-global-nav__link" data-section="process">ご依頼の流れ</a>
                    </li>
                    <li class="c-global-nav__item">
                        <a href="#profile" class="c-global-nav__link" data-section="profile">私について</a>
                    </li>
                    <li class="c-global-nav__item">
                        <a href="#contact" class="c-global-nav__link" data-section="contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <button class="c-drawer-icon" aria-label="メニューを開く">
        <span class="c-drawer-icon__bar"></span>
        <span class="c-drawer-icon__bar"></span>
        <span class="c-drawer-icon__bar"></span>
    </button>
    <div class="c-drawer-overlay"></div>
    <div class="c-drawer">
        <div class="c-drawer__content">
            <ul class="c-drawer__list">
                <li class="c-drawer__item">
                    <a href="#works" class="c-drawer__link">実績一覧</a>
                </li>
                <li class="c-drawer__item">
                    <a href="#service" class="c-drawer__link">提供サービス</a>
                </li>
                <li class="c-drawer__item">
                    <a href="#process" class="c-drawer__link">ご依頼の流れ</a>
                </li>
                <li class="c-drawer__item">
                    <a href="#profile" class="c-drawer__link">私について</a>
                </li>
                <li class="c-drawer__item">
                    <a href="#contact" class="c-drawer__link">お問い合わせ</a>
                </li>
            </ul>
        </div>
    </div>