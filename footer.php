<footer class="l-footer">
    <div class="l-footer__inner l-section__inner l-section__inner--narrow">
        <div class="l-footer__container">
            <div class="l-footer__heading">
                <h2 class="l-footer__logo">
                    <a href="/" class="l-footer__logo-link">Tera’s portfolio</a>
                </h2>
            </div>
            <?php $is_front = is_front_page(); ?>
            <ul class="l-footer__list">
                <li class="l-footer__item">
                    <a href="<?php echo $is_front ? '#works' : home_url('/') . '#works'; ?>" class="l-footer__link">実績紹介</a>
                </li>
                <li class="l-footer__item">
                    <a href="<?php echo $is_front ? '#service' : home_url('/') . '#service'; ?>" class="l-footer__link">提供サービス</a>
                </li>
                <li class="l-footer__item">
                    <a href="<?php echo $is_front ? '#process' : home_url('/') . '#process'; ?>" class="l-footer__link">ご依頼の流れ</a>
                </li>
                <li class="l-footer__item">
                    <a href="<?php echo $is_front ? '#profile' : home_url('/') . '#profile'; ?>" class="l-footer__link">私について</a>
                </li>
                <li class="l-footer__item">
                    <a href="<?php echo $is_front ? '#contact' : home_url('/') . '#contact'; ?>" class="l-footer__link">お問い合わせ</a>
                </li>
                <li class="l-footer__item">
                    <a href="#" id="email-link" class="l-footer__sns-link">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/email-icon.webp" alt="メールアイコン" width="50" height="50">
                    </a>
                </li>
                <li class="l-footer__item">
                    <a href="https://x.com/BR5J6DXbuz70037" target="_blank" class="l-footer__sns-link" rel="noopener" aria-label="X（旧Twitter）">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/x-logo-wt.webp" alt="" width="2400" height="2453">
                    </a>
                </li>
            </ul>
        </div>
        <div class="l-footer__bg-image">
            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/mv-image-pc.webp" alt="" width="1401" height="1221">
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
        <h3 id="modal-head1" class="p-top-modal__title">求人サイト（サンプル）</h3>
        <div class="p-top-modal__body">
            <div class="p-top-modal__left">
                <div class="p-top-modal__image p-top-modal-mockup-container">
                    <div class="c-video">
                        <video
                            class="js-click-video"
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
                </div>
            </div>
            <div class="p-top-modal__right">
                <ul class="p-top-modal__list">
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
                                <p class="p-top-modal__message">タイムラインの各ポイントをテキスト量に左右されることなく精緻に配置するJavaScript実装により、ユーザーは時系列情報を直感的に理解できる高い視認性と操作性を得られます。
                                    さらに、動的なコンテンツの変化にも柔軟に追従することで、堅牢かつ拡張性の高いUIを実現しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">FAQセクションでは、表示数を画面幅に応じて自動調整。タブ切り替えやリサイズ後も状態を維持できるよう設計し、全体を関数化することで再利用性や拡張性も意識しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">横スライダーのプログレスバーを自作し、バーをマウスドラッグしてスライド可能な実装を行いました。これにより操作性が大幅に向上し、ユーザーは直感的でストレスのない体験を得られます。</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="p-top-modal__link-body l-section__inner--narrow l-section__inner--modal">
        <a href="https://bluesky.web-tera-design.com/" target="_blank" rel="nofollow noopener" class="c-button c-button__wrapper">
            <span class="c-button__link-text">サイトを見る</span>
        </a>
    </div>
</dialog>

<dialog id="modal2" aria-labelledby="modal-head2" aria-describedby="modal-text2" class="p-top-modal__content">
    <div class="p-top-modal__inner l-section__inner--narrow l-section__inner--modal">
        <button class="p-top-modal__close-btn">
            閉じる
        </button>
        <h3 id="modal-head2" class="p-top-modal__title">クリニックサイト（サンプル）</h3>
        <div class="p-top-modal__body">
            <div class="p-top-modal__left">
                <div class="p-top-modal__image p-top-modal-mockup-container">
                    <div class="c-video">
                        <video
                            class="js-click-video"
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/img/clinic.webp"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/src/assets/video/clinic-modal.mp4" type="video/mp4">
                            <source src="<?php echo get_template_directory_uri(); ?>/src/assets/video/clinic-modal.webm" type="video/webm">
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                </div>
            </div>
            <div class="p-top-modal__right">
                <ul class="p-top-modal__list">
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">制作期間と費用の目安</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">制作期間：１ヶ月</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">製作費：１０万円</p>
                            </li>
                        </ul>
                    </li>
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
                                <p class="p-top-modal__message">Wordpressで構築した架空のクリニックサイトです。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">カスタム投稿（例：お知らせ、スタッフ紹介、事例など）を導入し、クライアントが迷わず管理できる構成です。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">カスタムフィールド（ACF）を用いた柔軟な入力フォームの構築です。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">アーカイブページ、タクソノミー、ページネーションの動的生成にも対応しました。</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">実装の工夫</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">トップページのファーストビューには、GSAPによる立体的なスライドアクションを採用しました。<br>テキストは一文字ずつ上下にアニメーションさせながら表示し、印象的かつメッセージ性の高い演出を実現しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">お問い合わせフォームは、自動フォーカスやカナ変換、電話番号補正など入力支援機能をJavascriptで実装しました。<br>ラジオ・チェックボックスもTab操作時に強調表示しています。
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="p-top-modal__link-body l-section__inner--narrow l-section__inner--modal">
        <a href="https://tera-corporate.web-tera-design.com/" target="_blank" rel="nofollow noopener" class="c-button c-button__wrapper">
            <span class="c-button__link-text">サイトを見る</span>
        </a>
    </div>
</dialog>

<dialog id="modal3" aria-labelledby="modal-head3" aria-describedby="modal-text3" class="p-top-modal__content">
    <div class="p-top-modal__inner l-section__inner--narrow l-section__inner--modal">
        <button class="p-top-modal__close-btn">
            閉じる
        </button>
        <h3 id="modal-head3" class="p-top-modal__title">自作ポモドーロタイマー</h3>
        <div class="p-top-modal__body">
            <div class="p-top-modal__left">
                <div class="p-top-modal__image p-top-modal-mockup-container">
                    <div class="c-video">
                        <video
                            class="js-click-video"
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/img/pomodoro.webp"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/src/assets/video/pomodoro.mp4" type="video/mp4">
                            <source src="<?php echo get_template_directory_uri(); ?>/src/assets/video/pomodoro.webm" type="video/webm">
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                </div>
            </div>
            <div class="p-top-modal__right">
                <ul class="p-top-modal__list">
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">制作期間と費用の目安</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">制作期間：３日</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">製作費：応相談</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">担当範囲</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">企画・設計・デザイン・フロントエンド実装（HTML / SCSS / JavaScript）まで、すべて個人で制作しました。</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">サイト概要</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">自作のポモドーロタイマーです。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">実際の時刻に応じて自動的に作業用・休憩用・昼休み用のYouTube動画を再生することで、集中力を高めつつ、自然な時間管理ができるツールです。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">動画再生にはYouTube IFrame APIを利用しており、Javascript上で動画IDを指定するだけで切り替え可能な仕組みを構築しました。</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">実装の工夫</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">小さな演出や制御もすべてJavaScriptとGSAPで実装しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">実際の時刻に連動し、毎時00分〜50分を「作業時間」、50分〜00分を「休憩時間」、12時台は「昼休憩」として、それぞれ自動で動画が切り替わるよう実装しました。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">画面上のセレクトボックスからアラーム音を選択できるほか、フリー音声ファイルをHTMLとJavaScriptに記述することで、リストに任意のアラーム音を追加することも可能です。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">音量調整には自作のスライダーUIを実装し、アラームとYouTube動画の音量はそれぞれ個別に設定可能です。<br>各音量設定はローカルストレージに保存され、次回以降も同じデバイスでタイマーを開くと、前回の設定が自動で反映されるようになっています。</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="p-top-modal__link-body l-section__inner--narrow l-section__inner--modal">
        <a href="https://web-tera-design.com/youtube-timer/" target="_blank" rel="nofollow noopener" class="c-button c-button__wrapper">
            <span class="c-button__link-text">サイトを見る</span>
        </a>
    </div>
</dialog>

<dialog id="modal4" aria-labelledby="modal-head4" aria-describedby="modal-text4" class="p-top-modal__content">
    <div class="p-top-modal__inner l-section__inner--narrow l-section__inner--modal">
        <button class="p-top-modal__close-btn">
            閉じる
        </button>
        <h3 id="modal-head3" class="p-top-modal__title">ポートフォリオサイト</h3>
        <div class="p-top-modal__body">
            <div class="p-top-modal__left">
                <div class="p-top-modal__image p-top-modal-mockup-container">
                    <div class="c-video">
                        <video
                            class="js-click-video"
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/video/portfolio-modal.mp4"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/portfolio-modal.mp4" type="video/mp4" />
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/portfolio-modal.webm" type="video/webm" />
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                </div>
            </div>
            <div class="p-top-modal__right">
                <ul class="p-top-modal__list">
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">制作期間と費用の目安</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">制作期間：10日</p>
                            </li>
                        </ul>
                    </li>
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
                                <p class="p-top-modal__message">このポートフォリオサイトは、これまでの制作経験の集大成として制作しました。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">セマンティックなHTMLでは、見出しやリスト、ナビゲーションなど意味を持つタグを厳選して配置。
                                    これにより、検索エンジン最適化（SEO）の強化やスクリーンリーダーなど支援技術のアクセスビリティ向上を両立させています。
                                </p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">本サイトでは最初に目を引くローディングアニメーションを実装し、ユーザーの期待感を高めつつスムーズなページ遷移を演出しています。
                                    一方で、ページ本文では過剰なアニメーションを控え、コンテンツの可読性と集中しやすさを重視しました。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">お問い合わせは専用ページを設けず一画面で完結させ、ユーザーが迷わずスムーズに問い合わせできるよう、視認性や操作性、アクセシビリティを重視して設計されています</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">実装の工夫</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">再生中の動画をタップ・クリックするだけで再生・一時停止ができます。見た目はシンプルに保ちつつ、操作性を大幅に向上。商品紹介やプロモーション動画など、多くのコンテンツで快適な視聴体験を実現します。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">初回アクセス時にのみ再生されるローディングアニメーションは、テキストを1文字ずつ分割し、スケールアップやフェードアウト、ぼかし、波紋状のリップルエフェクトを組み合わせています。GSAPのタイムラインで滑らかな同期とイージングを制御し、カラーグラデーションやシャドウの動的変化で視覚的な広がりを演出。訪問者に高品質で洗練された体験を提供します。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">ヘッダーはスクロールに応じて動的に状態を切り替え、視認性と操作性を向上させています。
                                    GSAPのScrollTriggerで特定エリア到達時に背景色や文字色、影を滑らかに変化。
                                    ナビリンクは閲覧エリアに合わせて色や点滅・拡大アニメーションを調整し、ユーザーの注目を効果的に誘導します。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">timeline形式のprofileセクションでは、各項目がスクロールトリガーにより順次フェードインし、GSAPを使って透明度、位置、拡大縮小、ぼかし効果を組み合わせたトランジションで動きを演出しています。
                                    特に最終項目には、時間経過とスクロールに連動した光の流れを加え、洗練された印象と動的な演出によりユーザーの注目を集めやすく設計しています。
                                    さらに、スクロール進行に合わせて項目間をつなぐtimelineラインの長さを動的に調整し、視覚的に進行度をわかりやすく示しています。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">問い合わせセクションでは、ScrollTriggerを活用して表示時に最初の入力欄へ自動でフォーカスを当てることで、ユーザーがスムーズに入力を開始できるようにしています。フォーカス時には適切に視覚強調のクラスを付与し、キーボードユーザーやスクリーンリーダー利用者にも配慮しており、ラジオボタンなど特定要素は除外して誤った強調を防ぐ細やかな制御も行っています。また、タブキー操作で入力欄の区切りがわかりやすく、視覚的なフォーカスクラス付与により迷わずスムーズに入力できる工夫がされています。</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="p-top-modal__link-body l-section__inner--narrow l-section__inner--modal">
        <a href="https://web-tera-design.com/youtube-timer/" target="_blank" rel="nofollow noopener" class="c-button c-button__wrapper">
            <span class="c-button__link-text">サイトを見る</span>
        </a>
    </div>
</dialog>

<dialog id="modal5" aria-labelledby="modal-head5" aria-describedby="modal-text5" class="p-top-modal__content">
    <div class="p-top-modal__inner l-section__inner--narrow l-section__inner--modal">
        <button class="p-top-modal__close-btn">
            閉じる
        </button>
        <h3 id="modal-head5" class="p-top-modal__title">キャンペーンサイト（サンプル）</h3>
        <div class="p-top-modal__body">
            <div class="p-top-modal__left">
                <div class="p-top-modal__image p-top-modal-mockup-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/campaign.webp" alt="" width="672" height="449">
                </div>
            </div>
            <div class="p-top-modal__right">
                <ul class="p-top-modal__list">
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">制作期間と費用の目安</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">制作期間：１週間</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">製作費：３万円</p>
                            </li>
                        </ul>
                    </li>
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
                                <p class="p-top-modal__message">架空のキャンペーンランディングページです。</p>
                            </li>
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">スライダー（Swiper）、モーダル、アコーディオン、テーブルレイアウト、問い合わせフォームなど、実務でよく使われる要素を網羅したキャンペーンサイトのサンプルです。</p>
                            </li>
                        </ul>
                    </li>
                    <li class="p-top-modal__item">
                        <h4 class="p-top-modal__heading">実装の工夫</h4>
                        <ul class="p-top-modal__sublist">
                            <li class="p-top-modal__subitem">
                                <p class="p-top-modal__message">CSSや構造の理解を深めることを目的としました。細かなレスポンシブ対応や擬似要素の調整など、基本の積み上げを意識しました。</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="p-top-modal__link-body l-section__inner--narrow l-section__inner--modal">
        <a href="https://web-tera-design.com/tera_onomichi/" target="_blank" rel="nofollow noopener" class="c-button c-button__wrapper">
            <span class="c-button__link-text">サイトを見る</span>
        </a>
    </div>
</dialog>



<?php wp_footer(); ?>
</body>

</html>