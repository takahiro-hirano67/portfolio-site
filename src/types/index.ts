// ==========================================
// 汎用
// ==========================================

// 汎用的な外部リンクの型
export type ExternalLink = {
    id: string; // リンクの一意なID
    label: string; // リンクの表示名 (例: "GitHub", "Vercel")
    url: string; // リンク先のURL
};

// ============================================================
// 記事
// ============================================================

export type ArticleData = {
    id: string; // 記事の一意なID
    slug: string; // URLとファイル名に使用 (拡張子以外を指定)
    title: string; // 記事のタイトル
    tags?: string[]; // タグ
    date: string; // 投稿日
    description: string; // 一覧に表示する概要
};

// ============================================================
// ヘッダー
// ============================================================

export type NavLink = {
    label: string; // 表示するテキスト (例: "About", "Articles")
    url: string; // 遷移先のパス (例: "/#about", "/articles")
};

export type HeaderData = {
    title: string; // 左上に表示するサイト名や名前
    navLinks: NavLink[]; // ページ内遷移用のナビゲーションリンク名 (例: "About")
    sns: ExternalLink[]; // ヘッダー右側に表示するSNSや外部リンクのリスト
};

// ============================================================
// 基本情報
// ============================================================
export type ProfileBadge = {
    id: string; // バッジの一意なID
    label: string; // バッジに表示するテキスト (例: "2028年卒業見込み")
};

export type ProfileData = {
    name: string; // 氏名
    affiliation: string; // メインの所属 (例: "愛知工業大学...")
    description: string; // 自己紹介の本文
    badges: ProfileBadge[]; // 氏名の上に表示するステータスバッジのリスト
    externalLinks: ExternalLink[]; // 自己紹介の下に表示する外部リンクのリスト
};

// ============================================================
// 制作物
// ============================================================
export type WorkData = {
    id: string; // 制作物の一意なID
    name: string; // 制作物の名前
    tagline: string; // 制作物の一言キャッチコピー
    description: string; // 制作物の詳細な説明
    stack: string[]; // 使用した技術スタックのリスト
    badge: string | null; // 状態を表すバッジ (例: "開発中")。無い場合はnull
    links: ExternalLink[]; // GitHubやVercelなどの外部リンクのリスト
    imagesLabel: string; // 画像エリアのヘッダーに表示するラベル (例: "アプリケーション画面")
    imagesSubLabel: string; // ボタン等に表示する画像の呼称 (例: "画面")
    images: string[]; // 画像のパスのリスト。画像がない場合は空配列
};

// ============================================================
// 研究
// ============================================================
export type ResearchFinding = {
    id: string; // 発見事項の一意なID
    label: string; // 発見事項の見出し (例: "P_src（原典適合率）")
    description: string; // 発見事項の詳細な説明
};

export type ResearchAchievement = {
    id: string; // 成果の一意なID
    label: string; // 成果の名称 (例: "最優秀発表賞")
    description: string; // 授与機関や学会名などの詳細
    url?: string; // 成果に関連する外部リンク (オプション)
};

export type ResearchData = {
    id: string; // 研究の一意なID
    title: string; // 研究のタイトル
    subtitle: string; // 研究のサブタイトル
    description: string; // 研究の概要説明
    imagesLabel: string; // 画像エリアのヘッダーに表示するラベル (例: "説明スライド（抜粋）")
    imagesSubLabel: string; // ボタン等に表示する画像の呼称 (例: "スライド")
    images: string[]; // スライド等の画像パスのリスト
    findings: ResearchFinding[]; // 主な発見・提案のリスト
    achievements: ResearchAchievement[]; // 成果のリスト
};

// ============================================================
// スキルセット
// ============================================================
export type SkillItem = {
    name: string; // スキルの名称 (例: "Python")
    period: string; // 経験期間 (例: "2年")
    usage: string; // 主な用途 (例: "インターン・研究")
    note: string; // スキルに関する補足説明
};

export type SkillGroup = {
    category: string; // スキルのカテゴリ (例: "バックエンド・データ")
    items: SkillItem[]; // そのカテゴリに含まれるスキルのリスト
};
