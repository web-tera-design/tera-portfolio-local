<footer class="l-footer">
    <div class="l-footer__inner l-section__inner l-section__inner--narrow">
        <div class="l-footer__container">
            <div class="l-footer__heading">
                <h2 class="l-footer__logo">Tera’s portfolio</h2>
            </div>
            <ul class="l-footer__list">
                <li class="l-footer__item">
                    <a href="" class="l-footer__link">実績一覧</a>
                </li>
                <li class="l-footer__item">
                    <a href="" class="l-footer__link">提供サービス</a>
                </li>
                <li class="l-footer__item">
                    <a href="" class="l-footer__link">ご依頼の流れ</a>
                </li>
                <li class="l-footer__item">
                    <a href="" class="l-footer__link">私について</a>
                </li>
                <li class="l-footer__item">
                    <a href="" class="l-footer__link">ご相談はこちら</a>
                </li>
                <li class="l-footer__item">
                    <a href="https://x.com/BR5J6DXbuz70037" target="_blank" class="l-footer__sns-link" rel="noopener" aria-label="X（旧Twitter）">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/x-logo-wt.webp" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="l-footer__bg-image">
            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/mv-image-pc.webp" alt="">
        </div>
    </div>
</footer>
<div class="l-footer__bottom">
    <small class="l-footer__copyright">Copyright © 2025 Tera’s portfolio All rights reserved.</small>
</div>


<dialog id="modal1" aria-labelledby="modal-head1" aria-describedby="modal-text1" class="p-top-modal__content">
    <div class="p-top-modal__inner l-section__inner--narrow l-section__inner--modal">
        <button class="p-top-modal__close-btn">
            閉じる
        </button>
        <h3 id="modal-head1" class="p-top-modal__title">BLUE SKY（サンプル）</h3>
        <div class="p-top-modal__body">
            <div class="p-top-modal__left">
                <div class="p-top-modal__image p-top-modal-mockup-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/mockup.webp" alt="">
                    <video
                        autoplay
                        loop
                        muted
                        playsinline
                        poster="<?php echo get_template_directory_uri(); ?>/dist/assets/img/bluesky.webp"
                        width="100%"
                        height="auto">
                        <source src="<?php echo get_template_directory_uri(); ?>/src/assets/video/interview-modal.mp4" type="video/mp4">
                        <source src="<?php echo get_template_directory_uri(); ?>/src/assets/video/interview-modal.webm" type="video/webm">
                        お使いのブラウザでは動画を再生できません。
                    </video>
                </div>
                <!-- <ul class="c-tags u-mt14">
                    <li class="c-tag">LP</li>
                    <li class="c-tag">Figma</li>
                    <li class="c-tag">BEM</li>
                </ul> -->
            </div>
            <div class="p-top-modal__right">
                <ul class="p-top-modal__list">
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">担当範囲</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">コーディング</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">サイト概要</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">架空の採用ランディングページです。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">GSAPとScrollTriggerを用いて、斜めに動くスライダーやフェード、拡大アニメーション、スクロールに応じて伸縮するタイムラインなど、多様な演出を組み合わせました。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">タブ切り替えとアコーディオンを組み合わせることで、情報量が多くても快適に閲覧できるよう配慮しました。</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">実装の工夫</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">斜めスライダーは、どのデバイスでもレイアウトが崩れないよう、スライド幅や余白を細かく調整しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">タイムラインの点は、要素の高さをJavaScriptで動的に計算し、テキスト量が変わっても正しい位置に表示されるよう実装しました。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">FAQセクションでは、表示数を画面幅に応じて自動調整。タブ切り替えやリサイズ後も状態を維持できるよう設計し、全体を関数化することで再利用性や拡張性も意識しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">横スライダーのプログレスバーを自作し、バーをマウスドラッグしてスライド可能な実装を行いました。</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">制作期間と費用の目安</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">制作期間：２週間</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">製作費：５万円</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div class="p-top-modal__link-body">
        <a href="" class="p-top-modal__link">
            <span class="p-top-modal__link-inner">
                <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/modal-left.svg" alt="">
                サイトを見る
                <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/modal-right.svg" alt="">
            </span>
        </a>
    </div> -->
    <div class="p-top-modal__link-body">
        <a href="" class="c-button c-button__skew-wrapper">
            <span class="c-button__skew-inner">
                <span class="c-button__icon" aria-hidden="true">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/modal-left.svg" alt="">
                </span>
                <span class="c-button__text">サイトを見る</span>
                <span class="c-button__arrow" aria-hidden="true">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/modal-right.svg" alt="">
                </span>
            </span>
        </a>
    </div>
</dialog>
<?php wp_footer(); ?>
</body>

</html>