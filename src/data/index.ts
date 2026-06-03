import type { HeaderData, ProfileData, ResearchData, SkillGroup, WorkData } from "@/types";

// ============================================================
// リンク
// ============================================================

export const GitHubLink = "https://github.com/takahiro-hirano67";
export const QiitaLink = "https://qiita.com/takahiro-hirano67";
export const PortfolioRepoLink = "https://github.com/takahiro-hirano67/portfolio-site";

// ============================================================
// ヘッダー
// ============================================================

export const HEADER_DATA: HeaderData = {
    title: "Takahiro Hirano",
    navLinks: ["About", "Works", "Research", "Skills"],
    sns: [{ id: "1", label: "GitHub", url: GitHubLink }],
};

// ============================================================
// 基本情報
// ============================================================

export const PROFILE: ProfileData = {
    name: "平野 貴大",
    affiliation: "愛知工業大学 経営情報システム専攻",
    description:
        "生成AI（LLM）を用いた知財探索システムの開発や、ハルシネーション検証の研究に取り組んでいます。大学発スタートアップでの活動を通し、「何を根拠にそう言えるのか」という問いを大切にしながら、事実に基づいた、ユーザーが安心して使えるシステムの設計から実装までに向き合っています。",
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
        description:
            "特許文書を起点にアイデア生成・類似特許検索・協業先マッチングを行うWebアプリです。根拠を辿れる状態でLLMの生成物を観察できる空間を提供します。数百万件の特許公報・特許分類・法人情報を管理する自前のDBとAPIを整備し、バックエンドからフロントエンドまで一貫して実装しています。サービス化に向けて日々開発を進めています。",
        stack: [
            "Next.js",
            "TypeScript",
            "FastAPI",
            "Docker",
            "PostgreSQL",
            "Psycopg",
            "Drizzle ORM",
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
        name: "academic-reader",
        tagline: "学術論文PDFの構造化ビューワー",
        description:
            "Doclingを用いて複雑な段組み・数式・図版を含む論文PDFを正確に構造化し、ブラウザ上でMarkdownとして表示するローカル専用ツールです。ブラウザの翻訳機能をそのまま使える点が特徴です。",
        stack: ["Next.js", "TypeScript", "FastAPI", "Docker", "Docling"],
        badge: null,
        links: [{ id: "1", label: "GitHub", url: "https://github.com/takahiro-hirano67/academic-reader" }],
        imagesLabel: "アプリケーション画面",
        imagesSubLabel: "画面",
        images: ["/works/academic-reader/screenshot-1.png"],
    },
    {
        id: "ziyuu-sikkou-bingo-num",
        name: "ziyuu-sikkou-bingo-num",
        tagline: "イベント景品番号管理アプリ",
        description:
            "自由ヶ丘執行委員会（学生組織）で利用するビンゴ大会の景品割り当てを自動化するWebアプリです。手作業による人為的ミスと参加人数変動への対応という構造的な問題を、Fisher-Yatesシャッフルで根本から解決します。実際にイベント本番で利用し、ミスなく運用できました。",
        stack: ["Next.js", "TypeScript"],
        badge: null,
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
        description:
            "視覚障がいを持つ方へ「風景を知る喜び」を提供することを目的とした、白杖装着型のデバイス（プロトタイプ）です。ボタンを押すと内蔵カメラが周囲を撮影し、Gemini APIを用いて生成した風景の解説をイヤホンから音声（Open JTalk）で読み上げます。大学の3DCADの講義課題をきっかけに、Raspberry Piの調達からPythonでのマルチスレッド制御、LLMのプロンプトチューニングまで、一から自力で調査し実装を行いました。既存アプリと異なり「スマホのリソースを占有しない」専用ハードウェアとしての独立性を意識して設計しています。",
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
        description:
            "小学校の「6年生を送る会」の出し物として企画・開発した参加型のシミュレーションゲームです。子どもたちが「お菓子メーカーの社長」となり、経営課題に対して多数決で選択肢を決定します。利益（お金）と社会的責任（信用）のパラメーターが変動し、結末が分岐する仕組みです。生成AIで作成した親しみやすいスライドをNext.js上のWebアプリに組み込み、状態管理を行いました。保護者の方との打ち合わせや、実際の体育館での進行も担当し、コードを書くこと以上に「ユーザーにどう楽しんで学びを得てもらうか」という体験設計の重要性を学ぶ貴重な経験となりました。",
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
        description:
            "LLMを用いて特許技術を融合させ新規アイデアを生み出す際、もっともらしい事実の捏造（ハルシネーション）による論理飛躍が大きな課題となります。本研究では、生成テキストが特許原文（事実）にどれだけ基づいているかを定量的に評価する手法を確立し、各種プロンプト（生成手法）がハルシネーションに与える影響を検証しました。",
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
                note: "メイン言語。FastAPIを用いたAPI構築や、Docling・SudachiPy等を利用した特許解析・データ処理で活用。",
            },
            {
                name: "PostgreSQL",
                period: "1年半",
                usage: "インターン・研究",
                note: "数百万件の特許公報・法人情報データベースを構築。JSONB型及びXML型の活用や、PGroongaを用いた日本語検索、pgvectorを用いた意味検索などを運用。",
            },
            {
                name: "FastAPI",
                period: "1年半",
                usage: "インターン・個人開発",
                note: "Pythonベースの高速なバックエンドAPI構築。Pydanticを用いた堅牢な型定義を実践。",
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
                note: "Next.jsと組み合わせた開発の主軸。型安全性を担保し、ZodやDrizzle ORM等と連携して活用。",
            },
            {
                name: "Next.js / React",
                period: "1年",
                usage: "インターン・個人開発",
                note: "App Routerを利用したフルスタック開発。Server Components/Actionsによるインフラ隠蔽を意識。",
            },
            {
                name: "Tailwind CSS",
                period: "1年",
                usage: "インターン・個人開発",
                note: "一貫したデザイントークンに基づくスタイリング。セマンティックなHTML構造を意識したUI実装。",
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
                note: "特許データベースとLLMを組み合わせた関連技術探索・アイデア生成機能の実装。",
            },
            {
                name: "プロンプトエンジニアリング",
                period: "1年半",
                usage: "インターン・研究",
                note: "ハルシネーションを抑え、事実に基づく出力を制御するための設計と、その評価手法の確立。",
            },
            {
                name: "ストリーミング生成",
                period: "1年",
                usage: "インターン・個人開発",
                note: "SSE(Server-Sent Events)形式でのデータ送信と、リアルタイムなトークンレンダリングの実装。",
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
                note: "DockerfileやDocker Composeを用いた、複数コンテナ（API + APP + DBなど）の開発環境構築。",
            },
            {
                name: "Git / GitHub",
                period: "2年",
                usage: "インターン・個人開発",
                note: "開発端末に依存しないプロジェクト管理とソースコードのバージョン管理。",
            },
            {
                name: "Raspberry Pi",
                period: "2ヶ月",
                usage: "趣味・授業",
                note: "カメラモジュールとGemini APIを組み合わせた、AI歩行支援デバイスのプロトタイプ実装。",
            },
        ],
    },
];
