import type { ProfileData, ResearchData, SkillGroup, WorkData } from "@/types";
import { GitHubLink, QiitaLink } from "./common-data";

// ============================================================
// プロフィール
// ============================================================

export const PROFILE: ProfileData = {
    name: "平野 貴大",
    affiliation: "愛知工業大学 経営情報システム専攻",
    description:
        "生成AI（LLM）を用いた知財探索システムの開発や、ハルシネーション検証の研究に取り組んでいます。大学発スタートアップでの活動を通じて、事実に基づき、ユーザーが安心して使えるシステムの設計から実装まで携わっています。",
    badges: [
        { id: "1", label: "株式会社フリーヒルズラボ 執行役員" },
        { id: "2", label: "自由ヶ丘執行委員会 財政" },
        { id: "3", label: "2028年卒業見込み" },
    ],
    externalLinks: [
        { id: "1", label: "GitHub", url: GitHubLink },
        { id: "2", label: "Qiita", url: QiitaLink },
    ],
};

// ============================================================
// 制作物
// ============================================================

export const WORKS: WorkData[] = [
    {
        id: "veridea",
        name: "Veridea",
        tagline: "根拠を辿れる知財探索の場",
        description: `特許文書を起点にアイデア生成・類似特許検索・協業先マッチングを行うWebアプリです。
            数百万件の特許公報や法人情報を管理する自前のデータベースと検索基盤をゼロから構築しています。
            最大の特徴は、LLMの不確実な出力を事実と推測に切り分ける「情報の透明性」にあります。直接引用箇所を原文と双方向ハイライトするUIや、独自開発した原点適合率の定量評価を組み合わせることで、「根拠を辿れる状態でユーザーが安心してLLMの生成物を観察し、自らの洞察を引き出せる空間」を提供します。
            現在、フリーヒルズラボでの活動の中で、私が最も力を入れて取り組んでいるプロジェクトです。`,
        stack: [
            "Next.js",
            "TypeScript",
            "FastAPI",
            "Docker",
            "PostgreSQL",
            "pgvector / PGroonga",
            "Sentence Transformers",
            "OpenAI互換API",
        ],
        badge: "開発中",
        links: [],
        imagesLabel: "アプリケーション画面",
        imagesSubLabel: "画面",
        images: ["/works/veridea/screenshot-1.jpg"],
    },
    {
        id: "academic-reader",
        name: "学術論文リーダー",
        tagline: "学術論文PDFの構造化ビューワー",
        description: `英語の学術論文を快適に読むために開発した、ローカル専用のPDF構造化ビューワーです。
            ブラウザ標準の翻訳機能がPDFに適用できない不便さや、LLMに直接翻訳を任せる際のコストおよび情報の欠落・ハルシネーションのリスクといった課題を解決するために作成しました。
            Doclingを用いて、複雑な段組み・数式・表を含むPDFを高精度なMarkdownに変換して描画しています。これにより、ブラウザの翻訳機能をそのまま利用し、日英文をシームレスに切り替えながら読む体験を実現しました。出力されたクリーンなテキストと自動抽出された図版は、人間にとって読みやすいだけでなく、LLMに与えるコンテキストとしても高い価値を発揮します。`,
        stack: ["Next.js", "TypeScript", "FastAPI", "Docker", "Docling"],
        badge: null,
        links: [{ id: "1", label: "GitHub", url: "https://github.com/takahiro-hirano67/academic-reader" }],
        imagesLabel: "アプリケーション画面",
        imagesSubLabel: "画面",
        images: ["/works/academic-reader/screenshot-1.png"],
    },
    {
        id: "ziyuu-sikkou-bingo-num",
        name: "ビンゴ番号管理アプリ",
        tagline: "ビンゴ運営をミスなく支える抽選基盤",
        description: `自由ヶ丘執行委員会（学生組織）で利用するビンゴ大会の景品割り当てを自動化するWebアプリです。
            「例年なんとかなっている」で済まされていた手作業による人為的ミスや、当日の参加人数変動に伴う構造的な欠陥に対し、Fisher-Yatesシャッフルアルゴリズムを用いた番号割り当てロジックを実装することで根本から問題を解決しました。
            イベント本番でのミスゼロ運用を達成し、システムによる業務改善を実証しました。`,
        stack: ["Next.js", "TypeScript"],
        badge: "運用中",
        links: [
            { id: "1", label: "Vercel", url: "https://ziyuu-sikkou-bingo-num.vercel.app" },
            { id: "2", label: "GitHub", url: "https://github.com/takahiro-hirano67/ziyuu-sikkou-bingo-num" },
        ],
        imagesLabel: "アプリケーション画面",
        imagesSubLabel: "画面",
        images: [
            "/works/bingo/screenshot-1.jpg",
            "/works/bingo/screenshot-2.jpg",
            "/works/bingo/screenshot-3.jpg",
            "/works/bingo/screenshot-4.jpg",
        ],
    },
    {
        id: "walking-assistant-ai",
        name: "白杖×AI歩行支援デバイス",
        tagline: "世界を探索する楽しさを提供するアタッチメント",
        description: `視覚障がいを持つ方へ「風景を知る喜び」を提供することを目的とした、白杖装着型のデバイス（プロトタイプ）です。
            ボタンを押すと内蔵カメラが周囲を撮影し、Gemini APIを用いて生成した風景の解説をイヤホンから音声（Open JTalk）で読み上げます。「スマホのリソースを占有しない」専用ハードウェアとしての独立性を意識して設計しています。
            大学の3DCADの講義課題をきっかけに、Raspberry Piの調達からPythonでのマルチスレッド制御、LLMのプロンプトチューニングまで、一から自力で調査し実装を行いました。`,
        stack: [
            "Python",
            "Raspberry Pi",
            "Camera Module",
            "Gemini API",
            "Open JTalk",
            "AutoCAD 3D (3D CAD)",
            "FlashPrint5 (スライサーソフト)",
        ],
        badge: "プロトタイプ",
        links: [{ id: "1", label: "GitHub", url: "https://github.com/takahiro-hirano67/Walking-Assistant-AI" }],
        imagesLabel: "発表スライド(抜粋)・開発中の様子",
        imagesSubLabel: "資料",
        images: [
            "/works/walking-assistant-ai/slide-1.svg",
            "/works/walking-assistant-ai/slide-2.svg",
            "/works/walking-assistant-ai/slide-3.svg",
            "/works/walking-assistant-ai/photo-1.jpg",
        ],
    },
    {
        id: "management-simulation-game",
        name: "きみが社長だ！〜参加型経営シミュレーション〜",
        tagline: "小学生向けのマルチエンディング型経営体験アプリ",
        description: `小学校の「6年生を送る会」の出し物として企画・開発した参加型のシミュレーションゲームです。
            子どもたちが「お菓子メーカーの社長」となり、経営課題に対して多数決で選択肢を決定します。利益（お金）と社会的責任（信用）のパラメーターが変動し、結末が分岐する仕組みです。生成AIで作成した親しみやすいスライドをNext.js上のWebアプリに組み込み、状態管理を行いました。
            保護者の方との打ち合わせや、実際の体育館での進行も担当し、コードを書くこと以上に「ユーザーにどう楽しんで学びを得てもらうか」という体験設計の重要性を学ぶ貴重な経験となりました。`,
        stack: ["Next.js", "TypeScript", "NotebookLM (画像生成)"],
        badge: "イベント企画",
        links: [
            { id: "1", label: "Vercel", url: "https://board-game-circle-recreation.vercel.app/game" },
            { id: "2", label: "GitHub", url: "https://github.com/takahiro-hirano67/board-game-circle-recreation" },
        ],
        imagesLabel: "実施風景・アプリケーション画面",
        imagesSubLabel: "資料",
        images: [
            "/works/management-simulation-game/photo-1.png",
            "/works/management-simulation-game/slide-1.svg",
            "/works/management-simulation-game/slide-2.svg",
            "/works/management-simulation-game/slide-3.svg",
            "/works/management-simulation-game/screenshot-1.jpg",
        ],
    },
];

// ============================================================
// 研究
// ============================================================

export const RESEARCH_LIST: ResearchData[] = [
    {
        id: "tech-matching",
        title: "特許をベースとする大規模言語モデルを用いた技術マッチング",
        subtitle: "形態素解析を用いたハルシネーション評価手法",
        description: `LLMを用いて特許技術を融合させ新規アイデアを生み出す際、もっともらしい事実の捏造（ハルシネーション）による論理飛躍が大きな課題となります。本研究では、生成テキストが特許原文（事実）にどれだけ基づいているかを定量的に評価する手法を確立し、各種プロンプト（生成手法）がハルシネーションに与える影響を検証しました。`,
        imagesLabel: "発表スライド(抜粋)",
        imagesSubLabel: "スライド",
        images: [
            "/research/tech-matching/slide-1.png",
            "/research/tech-matching/slide-2.png",
            "/research/tech-matching/slide-3.png",
        ],
        findings: [
            {
                id: "1",
                label: "P_src（原典適合率）",
                description: "LLM生成文に含まれる用語のうち原文に存在する割合を形態素解析で定量化する独自指標",
            },
            {
                id: "2",
                label: "批判的レビューの逆効果",
                description: "見栄えの向上が事実性の希薄化を招くトレードオフを統計的に示した",
            },
        ],
        achievements: [
            {
                id: "1",
                label: "最優秀発表賞",
                description: "一般社団法人日本設備管理学会 東海支部 令和7年度学生研究発表会",
                url: "https://www.ait.ac.jp/lab-news/detail/0000959.php",
            },
        ],
    },
];

// ============================================================
// スキルセット
// ============================================================

export const SKILLS: SkillGroup[] = [
    {
        category: "バックエンド・データ",
        items: [
            {
                name: "Python",
                period: "2年",
                usage: "インターン・研究",
                note: "メイン言語として利用しています。FastAPIを用いたAPI構築や、Docling・SudachiPy等を利用した特許解析・データ処理などで活用しています。日々の開発ではRuffを導入し、コードの品質を保っています。",
            },
            {
                name: "PostgreSQL",
                period: "1年半",
                usage: "インターン・研究",
                note: "数百万件の特許公報や法人情報を扱うデータベースを構築しました。サーバーサイドカーソルを用いた省メモリなデータ移行や、PGroonga（全文検索）とpgvector（HNSWインデックス）を組み合わせた検索基盤を運用しています。",
            },
            {
                name: "FastAPI",
                period: "1年半",
                usage: "インターン・個人開発",
                note: "PythonベースのバックエンドAPI構築に利用しています。Pydanticを用いた堅牢な型定義や、Zip Bomb等のセキュリティ対策を施したファイル抽出エンドポイント、OpenAI互換APIを利用したLLM推論基盤などを実装しています。",
            },
        ],
    },
    {
        category: "フロントエンド",
        items: [
            {
                name: "TypeScript",
                period: "半年",
                usage: "インターン・個人開発",
                note: "Next.jsと組み合わせた開発の主軸です。openapi-fetchを利用した型安全なAPI通信や、Zod・Drizzle ORM等と連携して活用しています。",
            },
            {
                name: "Next.js / React",
                period: "1年",
                usage: "インターン・個人開発",
                note: "App Routerを利用したフルスタック開発を行っています。BFF（Backend For Frontend）としてのDB構築や、Server Components・Server Actionsによるインフラ隠蔽を意識した設計を心がけています。",
            },
            {
                name: "Tailwind CSS",
                period: "1年",
                usage: "インターン・個人開発",
                note: "一貫したデザイントークンに基づくスタイリングに利用しています。セマンティックなHTML構造を意識したUI実装を行っています。",
            },
        ],
    },
    {
        category: "生成AI関連",
        items: [
            {
                name: "RAG / 埋め込みモデル",
                period: "1年",
                usage: "インターン・研究",
                note: "特許データベースとLLMを組み合わせた関連技術探索システムなどで活用しています。RRF（逆順位融合）を用いたキーワード検索と意味検索の統合アルゴリズムを実装しました。",
            },
            {
                name: "プロンプトエンジニアリング",
                period: "1年半",
                usage: "インターン・研究",
                note: "ハルシネーションを抑え、事実に基づく出力を制御するための設計と、その評価手法の確立に取り組んでいます。複数LLMエージェントによる非同期の議論・調停プロンプトの設計なども行っています。",
            },
            {
                name: "ストリーミング生成",
                period: "1年",
                usage: "インターン・個人開発",
                note: "SSE（Server-Sent Events）形式でのデータ送信と、チャンクパース処理を用いたリアルタイムなテキストのUIレンダリングを実装しています。",
            },
        ],
    },
    {
        category: "インフラ・その他",
        items: [
            {
                name: "Docker",
                period: "半年",
                usage: "インターン・個人開発",
                note: "DockerfileやDocker Composeを用いて、複数コンテナ（API・APP・DBなど）を連携させた開発環境や運用環境を構築しています。",
            },
            {
                name: "Git / GitHub",
                period: "2年",
                usage: "インターン・個人開発",
                note: "開発端末に依存しないプロジェクト管理と、ソースコードのバージョン管理に利用しています。",
            },
            {
                name: "Raspberry Pi",
                period: "2ヶ月",
                usage: "趣味・授業",
                note: "カメラモジュールとGemini APIを組み合わせた、AI歩行支援デバイスのプロトタイプ実装で活用しました。",
            },
        ],
    },
];
