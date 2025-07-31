<?php get_header(); ?>
<div class="p-top-loading" id="js-loading">
    <h1 class="p-top-loading__text">
        <span class="p-top-loading__tera">
            <span class="p-top-loading__char">T</span>
            <span class="p-top-loading__char">e</span>
            <span class="p-top-loading__char">r</span>
            <span class="p-top-loading__char">a</span>
            <!-- <span class="p-top-loading__char">’</span>
            <span class="p-top-loading__char">s</span> -->
        </span>
        <span class="p-top-loading__portfolio">Tera’s portfolio</span>
    </h1>
    <div class="p-top-loading-blackout"></div>

</div>
<main id="mv" class="l-main">
    <section class="p-top-mv">
        <div class="p-top-mv__inner l-section__inner--mv">
            <div class="p-top-mv__content">
                <h2 class="p-top-mv__title">正確さの先に、<br class="u-br--sm-down">伝わる力を。</h2>
                <div class="p-top-mv__copy">
                    <p class="p-top-mv__lead">デザインを引き立てるための、<br class="u-br--sm-down">実装にこだわります。</p>
                </div>
            </div>
            <div class="p-top__image-wrapper">
                <div class="p-top-mv__image">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/mv-image-pc.webp" alt="" width="1401" height="1221">
                </div>
            </div>
        </div>
    </section>

    <section id="works" class="p-top-works">
        <div class="p-top-works__inner l-section__inner l-section__inner--narrow">
            <div class="c-section-heading">
                <p class="c-heading--en" aria-hidden="true">Works</p>
                <h2 class="c-heading--title"><span class="u-red">実</span>績紹介</h2>
            </div>
            <ul class="p-top-works__list">
                <li class="p-top-works__item p-modal__open-btn js-modal__open-btn" data-dialog="modal1">
                    <div class="p-top-works__image p-top-mockup-container">
                        <video
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/img/bluesky.webp"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/bluesky-top.mp4" type="video/mp4">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/bluesky-top.webm" type="video/webm">
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                    <h3 class="p-top-works__title">求人サイト（サンプル）</h3>
                    <ul class="c-tags">
                        <li class="c-tag">LP</li>
                        <li class="c-tag">Figma</li>
                        <li class="c-tag">FLOCSS</li>
                    </ul>
                </li>
                <li class="p-top-works__item p-modal__open-btn js-modal__open-btn" data-dialog="modal2">
                    <div class="p-top-works__image p-top-mockup-container">
                        <video
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/img/clinic.webp"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/clinic.mp4" type="video/mp4">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/clinic.webm" type="video/webm">
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                    <h3 class="p-top-works__title">クリニックサイト（サンプル）</h3>
                    <ul class="c-tags">
                        <li class="c-tag">Wordpress</li>
                        <li class="c-tag">Figma</li>
                        <li class="c-tag">FLOCSS</li>
                    </ul>
                </li>
                <li class="p-top-works__item p-modal__open-btn js-modal__open-btn" data-dialog="modal3">
                    <div class="p-top-works__image p-top-mockup-container">
                        <!-- <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/mockup.webp" alt=""> -->
                        <video
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/img/pomodoro.webp"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/pomodoro-top.mp4" type="video/mp4">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/pomodoro-top.webm" type="video/webm">
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                    <h3 class="p-top-works__title">自作ポモドーロタイマー</h3>
                    <ul class="c-tags">
                        <li class="c-tag">その他</li>
                        <li class="c-tag">Javascript</li>
                        <li class="c-tag">GSAP</li>
                    </ul>
                </li>
                <li class="p-top-works__item p-modal__open-btn js-modal__open-btn" data-dialog="modal4">
                    <div class="p-top-works__image p-top-mockup-container">
                        <video
                            autoplay
                            loop
                            muted
                            playsinline
                            poster="<?php echo get_template_directory_uri(); ?>/dist/assets/video/portfolio-top.mp4"
                            width="100%"
                            height="auto">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/portfolio-top.mp4" type=" video/mp4">
                            <source src="<?php echo get_template_directory_uri(); ?>/dist/assets/video/portfolio-top.webm" type="video/webm">
                            お使いのブラウザでは動画を再生できません。
                        </video>
                    </div>
                    <h3 class="p-top-works__title">ポートフォリオサイト</h3>
                    <ul class="c-tags">
                        <li class="c-tag">Wordpress</li>
                        <li class="c-tag">Javascript</li>
                        <li class="c-tag">FLOCSS</li>
                    </ul>
                </li>
                <li class="p-top-works__item p-modal__open-btn js-modal__open-btn" data-dialog="modal5">
                    <div class="p-top-works__image">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/campaign.webp" alt="" width="672" height="449">
                    </div>
                    <h3 class="p-top-works__title">キャンペーンサイト（サンプル）</h3>
                    <ul class="c-tags">
                        <li class="c-tag">LP</li>
                        <li class="c-tag">Figma</li>
                        <li class="c-tag">BEM</li>
                    </ul>
                </li>
                <li class="p-top-works__item p-top-works__item--disabled p-modal__open-btn js-modal__open-btn" data-dialog="modal6">
                    <div class="p-top-works__image">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/service-koumuten.webp" alt="" width="672" height="450">
                    </div>
                    <span class="p-top-works__detail">このページは近日公開予定です。
                    </span>
                    <h3 class="p-top-works__title"></h3>
                </li>
            </ul>
        </div>
    </section>

    <section class="p-top-commitment">
        <div class="p-top-commitment__inner l-section__inner">
            <div class="c-section-heading">
                <p class="c-heading--en" aria-hidden="true">Commitment</p>
                <h2 class="c-heading--title"><span class="u-red">信</span>念とこだわり</h2>
            </div>
            <ul class="p-top-commitment__list">
                <li class="p-top-commitment__item">
                    <h3 class="p-top-commitment__title">
                        信頼は、誠実な積み重ねから
                    </h3>
                    <p class="p-top-commitment__message">
                        どんなに良いものを作っても、やりとりに不安があれば信頼は生まれません。<br>ひとつひとつのご依頼に対して、誠実に、丁寧に向き合うこと。<br>それが、成果以上に大切だと考えています。
                    </p>
                </li>
                <li class="p-top-commitment__item">
                    <h3 class="p-top-commitment__title">
                        ニュアンスまで汲み取る実装力
                    </h3>
                    <p class="p-top-commitment__message">
                        「意図通りに動かない」「思った通りの実装にならない」そんな不安を感じさせないように。<br>デザインの設計意図や細かなニュアンスを丁寧に読み取り、<br>再現性と安定感のあるコーディングで、“伝わる体験”をかたちにします。
                    </p>
                </li>
                <li class="p-top-commitment__item">
                    <h3 class="p-top-commitment__title">
                        「安心して任せられる」対応力
                    </h3>
                    <p class="p-top-commitment__message">
                        朝5時から夜9時まで、年中無休で対応。<br>即レス・即対応でやり取りのストレスをなくし、<br>進捗は
                        <a class="p-top-commitment__link" href="https://docs.google.com/spreadsheets/d/1HAcFoCzCtzHXlFC8dfEGhRxUAdHLj8vURv6Hsz660_U/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">情報共有シート
                            <span class="p-top-commitment__tooltip">情報共有シートを<br>ご覧ください</span>
                        </a>
                        でいつでも確認可能。<br>安心してお任せいただける体制を整えています。
                    </p>
                </li>
            </ul>
        </div>
    </section>

    <section class="p-top-assurance">
        <div class="p-top-assurance__inner l-section__inner l-section__inner--narrow">
            <div class="p-top-assurance__heading">
                <div class="c-section-heading">
                    <p class="c-heading--en p-top-section-heading" aria-hidden="true">Assurance</p>
                    <h2 class="c-heading--title p-top-assurance__heading-title"><span class="u-red">安</span>心して<br>ご依頼いただくために</h2>
                </div>
                <p class="p-top-assurance__lead">お客様に心からご満足いただけるよう、細部までこだわった安心の体制を整えています。</p>
                <div class="p-top-assurance__image">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/assurance-image.webp" alt="" width="780" height="620">
                </div>
            </div>
            <ul class="p-top-assurance__list">
                <li class="p-top-assurance__item">
                    <h3 class="p-top-assurance__title">緊急対応・仕様変更への柔軟な対応</h3>
                    <ul class="p-top-assurance__sublist">
                        <li>
                            <p class="p-top-assurance__text">ご相談いただければ、当日・翌日の緊急案件にもできる限り対応します。</p>
                        </li>
                        <li>
                            <p class="p-top-assurance__text">修正のご依頼は、完了までにかかる日数をすぐにご案内し、安心してお任せいただけるよう努めています。</p>
                        </li>
                    </ul>
                </li>
                <li class="p-top-assurance__item">
                    <h3 class="p-top-assurance__title">納品ルールの遵守と品質の担保</h3>
                    <ul class="p-top-assurance__sublist">
                        <li>
                            <p class="p-top-assurance__text">FLOCSSやBEMなどの一般的な設計はもちろん、プロジェクト固有ルールにも対応します。</p>
                        </li>
                        <li>
                            <p class="p-top-assurance__text">意味に合ったHTMLタグを適切に使い分け、構造的なマークアップを行うことで、SEOやアクセシビリティにも配慮した設計を心がけています。</p>
                        </li>
                    </ul>
                </li>
                <li class="p-top-assurance__item">
                    <h3 class="p-top-assurance__title">スムーズな進行管理と報連相</h3>
                    <ul class="p-top-assurance__sublist">
                        <li>
                            <p class="p-top-assurance__text">
                                <a class="p-top-commitment__link" href="https://docs.google.com/spreadsheets/d/1HAcFoCzCtzHXlFC8dfEGhRxUAdHLj8vURv6Hsz660_U/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">情報共有シート
                                    <span class="p-top-commitment__tooltip">情報共有シートを<br>ご覧ください</span>
                                </a>を使って、進捗情報を共有・可視化しています。
                            </p>
                        </li>
                        <li>
                            <p class="p-top-assurance__text">どんな内容でも当日中に必ずご返信します。対応の早さで、安心と信頼をお届けします。</p>
                        </li>
                    </ul>
                </li>
                <li class="p-top-assurance__item">
                    <h3 class="p-top-assurance__title">使用ツール・環境への柔軟な対応</h3>
                    <ul class="p-top-assurance__sublist">
                        <li>
                            <p class="p-top-assurance__text">対応カンプ： Figma / XD / Photoshop / Illustrator</p>
                        </li>
                        <li>
                            <p class="p-top-assurance__text">対応ツール： Zeplin / Backlog / Git</p>
                        </li>
                        <li>
                            <p class="p-top-assurance__text">対応ブラウザ： Safari / Chrome / Firefox / Edge</p>
                        </li>
                        <li>
                            <p class="p-top-assurance__text">対応OS： Mac / Windows / iPhone / Android</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>



    <section id="service" class="p-top-service">
        <div class="p-top-service__inner l-section__inner l-section__inner--narrow">
            <div class="c-section-heading">
                <p class="c-heading--en" aria-hidden="true">Services</p>
                <h2 class="c-heading--title"><span class="u-red">提</span>供サービス</h2>
            </div>
            <ul class="p-top-service__list">
                <li class="p-top-service__item">
                    <div class="p-top-service__heading">
                        <div class="p-top-service__image">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/service-coding.svg" alt="" width="61" height="61">
                        </div>
                        <h3 class="p-top-service__title">コーディング</h3>
                    </div>
                    <p class="p-top-service__text">FLOCSSやBEMといった設計ルールに沿い、保守性・再利用性の高いコーディングを行います。命名の一貫性や可読性を重視し、デザインの意図を正確に反映できるよう努めています。</p>
                </li>
                <li class="p-top-service__item">
                    <div class="p-top-service__heading">
                        <div class="p-top-service__image">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/service-wordpress.svg" alt="" width="61" height="61">
                        </div>
                        <h3 class="p-top-service__title">WordPress構築</h3>
                    </div>
                    <p class="p-top-service__text">シンプルで運用しやすいサイトを設計・実装します。カスタム投稿やカスタムフィールドの設計、既存テーマの改修にも柔軟に対応。編集者の使いやすさを大切に、無駄のない構成にします。</p>
                </li>
                <li class="p-top-service__item">
                    <div class="p-top-service__heading">
                        <div class="p-top-service__image">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/service-animation.svg" alt="" width="61" height="61">
                        </div>
                        <h3 class="p-top-service__title">アニメーション実装</h3>
                    </div>
                    <p class="p-top-service__text">GSAPやScrollTriggerを使い、視線誘導やUX向上に効果的な動きを実装します。過剰な演出は避け、見る人にとって心地よい動きを意識。デバイス差や表示負荷にも配慮し、適切な場面に最適なアニメーションを提案します。</p>
                </li>
                <li class="p-top-service__item">
                    <div class="p-top-service__heading">
                        <div class="p-top-service__image">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/service-spot.svg" alt="" width="61" height="60">
                        </div>
                        <h3 class="p-top-service__title">修正対応・スポット作業</h3>
                    </div>
                    <p class="p-top-service__text">文字・画像・リンク修正など、軽微な修正にも柔軟に対応します。「ここだけ直したい」といったスポットのご依頼も歓迎です。お急ぎの場合、可能な範囲で即日対応します。タスクの優先度や緊急度に応じて、全体進行に支障が出ないよう対応します。</p>
                </li>
            </ul>
        </div>
    </section>

    <section id="process" class="p-top-process">
        <div class="p-top-process__inner l-section__inner--lg l-section__inner--narrow">
            <div class="p-top-process__heading">
                <div class="c-section-heading">
                    <p class="c-heading--en" aria-hidden="true">Process</p>
                    <h2 class="c-heading--title"><span class="u-red">ご</span>依頼の流れ</h2>
                </div>
                <p class="p-top-process__heading-lead">

                </p>
            </div>
            <ul class="p-top-process__steps">
                <li class="p-top-process__step">
                    <div class="p-top-process__icon-wrapper">
                        <div class="p-top-process__icon-bg">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/process-bg.svg" alt="" width="101" height="101">
                        </div>
                        <div class="p-top-process__icon" aria-hidden="true">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/process-step1.svg" alt="" width="57" height="57">
                        </div>
                    </div>
                    <div class="p-top-process__content">
                        <span class="p-top-process__number">STEP 01</span>
                        <h3 class="p-top-process__title">お問い合わせ・ヒアリング</h3>
                        <p class="p-top-process__step-description">まずはお気軽に、お問い合わせフォームやX（旧Twitter）のDMからご連絡ください。
                            ご希望の内容やご予算、スケジュールなどをざっくりでも構いませんので、お聞かせください。</p>
                    </div>
                </li>
                <li class="p-top-process__step">
                    <div class="p-top-process__icon-wrapper">
                        <div class="p-top-process__icon-bg">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/process-bg.svg" alt="" width="101" height="101">
                        </div>
                        <div class="p-top-process__icon" aria-hidden="true">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/process-step2.svg" alt="" width="57" height="57">
                        </div>
                    </div>
                    <div class="p-top-process__content">
                        <span class="p-top-process__number">STEP 02</span>
                        <h3 class="p-top-process__title">お見積もり・スケジュール提示</h3>
                        <p class="p-top-process__step-description">内容をもとに、お見積もりとスケジュールをご提案いたします。あわせて、サーバーやドメインの有無も確認し、必要であれば取得支援も可能です。
                            公開方法（納品形式やアップロードの有無）についても、このタイミングで擦り合わせます。</p>
                    </div>
                </li>
                <li class="p-top-process__step">
                    <div class="p-top-process__icon-wrapper">
                        <div class="p-top-process__icon-bg">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/process-bg.svg" alt="" width="101" height="101">
                        </div>
                        <div class="p-top-process__icon" aria-hidden="true">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/process-step3.svg" alt="" width="53" height="45">
                        </div>
                    </div>
                    <div class="p-top-process__content">
                        <span class="p-top-process__number">STEP 03</span>
                        <h3 class="p-top-process__title">作業開始</h3>
                        <p class="p-top-process__step-description">共有いただいた資料やご要望に沿って、制作をスタートいたします。進行中も適宜ご連絡を差し上げ、ご確認いただきながら進めますので、はじめての方でも安心してご依頼いただけます。</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <section id="profile" class="p-top-profile">
        <div class="p-top-profile__inner l-section__inner--lg l-section__inner--narrow">
            <div class="c-section-heading">
                <p class="c-heading--en" aria-hidden="true">My story</p>
                <h2 class="c-heading--title"><span class="u-red">私</span>について</h2>
            </div>
            <div class="p-top-profile__lead-wrapper">
                <p class="p-top-profile__image">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/tera-image.webp" alt="">
                </p>
                <div class="p-top-profile__lead">
                    <p class=" p-top-profile__lead-main">テラ</p>
                    <p class="p-top-profile__lead-sub">千葉県在住。</p>
                    <p class="p-top-profile__lead-sub">趣味：ドライブと旅行。</p>
                    <p class="p-top-profile__lead-sub">一番の思い出：千葉 → 御殿場アウトレット → 伊勢神宮 → 出雲大社 → 伊勢神宮 → 草津温泉 → 千葉の6泊ロングドライブ旅行。

                    </p>
                </div>
            </div>
            <ul class="p-top-profile__timeline">
                <div class="p-top-profile__timeline-lines"></div>
                <li class="p-top-profile__timeline-item">
                    <div class="p-top-profile__timeline-content">
                        <h3 class="p-top-profile__career-title">バイクレーサー時代</h3>
                        <p class="p-top-profile__career-description">真夏のレースでは、路面温度は60℃を超え、ヘルメット内の体感温度は40℃近くに達します。<br>汗が止まらない過酷な環境の中、0.01秒単位でタイムを更新するために瞬時の判断を何度も繰り返しながら、数時間にわたって走り抜きます。<br>限りなく限界に近い状態で集中力と持久力を維持し続ける訓練を積んできました。<br>この経験は、限界に近い環境でも思考を止めず、高速かつ持続的に課題を解決し続ける力として、Web制作に直結しています。</p>
                    </div>
                </li>
                <li class="p-top-profile__timeline-item">
                    <div class="p-top-profile__timeline-content">
                        <h3 class="p-top-profile__career-title">通信会社のSV時代</h3>
                        <p class="p-top-profile__career-description">
                            店舗スタッフ・お客様・本部、それぞれの立場や事情が異なる中で、<br>
                            「今、この状況で最も良い着地は何か」を冷静に見極め、丁寧に調整し、的確に行動する力を磨いてきました。<br>
                            ときには利害がぶつかり合う場面でも、感情に流されず、相手の意図や背景を汲み取りながら合意形成を進めてきた経験があります。<br>
                            この経験は、Web制作においても、関係者の意見や要望を的確に読み取り、状況に応じて最善の判断を下しながら、制作を着実に前に進める「巻き取り力」として活かされています。
                        </p>
                    </div>
                </li>
                <li class="p-top-profile__timeline-item">
                    <div class="p-top-profile__timeline-content">
                        <h3 class="p-top-profile__career-title">大型トレーラー運転手時代</h3>
                        <p class="p-top-profile__career-description">
                            真夜中でも20時間を超える稼働があるトレーラー運転では、<br>
                            周囲の変化を一瞬たりとも見逃さず、集中力を切らさずに運転し続ける力が求められます。<br>
                            そのためには、日々の体調管理や天候リスクへの備え、ルートの確認など、事前準備を徹底し、常に安定したコンディションを維持することが不可欠でした。<br>
                            この経験は、バイクレーサー時代に身につけた「瞬発力」とは対照的に、<br>
                            長期的に成果を積み重ねていく冷静さと持久力として、Web制作の現場にも活かされています。
                        </p>
                    </div>
                </li>
                <li class="p-top-profile__timeline-item is-current u-shine-target">
                    <div class="p-top-profile__timeline-content">
                        <p class="p-top-profile__current">
                            限界への挑戦、現場を俯瞰する視点、地道な準備と調整。<br>
                            異なる仕事で培ってきたこれらの力は、Web制作においても大きな武器になっています。
                        </p>
                        <span class="u-shine"></span>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <section id="contact" class="p-top-contact" data-section="contact">
        <div class="p-top-contact__inner l-section__inner--lg l-section__inner--narrow">
            <div class="p-top-contact__heading">
                <div class="c-section-heading">
                    <p class="c-heading--en" aria-hidden="true">Contact</p>
                    <h2 class="c-heading--title"><span class="u-red">お</span>問い合わせ</h2>
                </div>
                <p class="p-top-contact__description">1営業日以内に必ずご返信します！<br class="u-br--sp">（5:00〜21:00対応）<br>お気軽にお問い合わせください。</p>
                <div class="p-top-contact__links">
                    <span id="mail-link" class="c-button c-button--mail"></span>
                    <a href=" https://x.com/BR5J6DXbuz70037" target="_blank" rel="nofollow noopener" class="c-button c-button--x" aria-label="X（旧Twitter）">
                        <span class="c-button__wrapper c-button__wrapper--x p-top-contact__button-wrapper">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/x-logo.webp" class="c-button__logo-normal" alt="" width="2400" height="2453">
                            <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/x-logo-wt.webp" class="c-button__logo-hover" alt="" width="2400" height="2453">
                            <span class="c-button__link-text">で連絡する</span>
                        </span>
                    </a>
                </div>
            </div>
            <?php echo do_shortcode('[contact-form-7 id="ab86973" title="お問い合わせフォーム"]'); ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>