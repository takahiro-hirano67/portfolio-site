"use client";

import Image from "next/image";
import { useState } from "react";

// --- データ ---

const HEADER_DATA = {
    title: "Takahiro Hirano",
    links: ["About", "Works", "Research", "Skills"],
    github: "https://github.com/takahiro-hirano67",
};

const PROFILE = {
    name: "平野 貴大",
    affiliation: "愛知工業大学 経営情報システム専攻",
    description:
        "生成AI（LLM）を用いた知財探索システムの開発や、ハルシネーション検証の研究に取り組んでいます。大学発スタートアップでの活動を通し、「何を根拠にそう言えるのか」という問いを大切にしながら、事実に基づいた、ユーザーが安心して使えるシステムの設計から実装までに向き合っています。",
    badges: [
        {
            id: "1",
            label: "株式会社フリーヒルズラボ 執行役員",
        },
        {
            id: "2",
            label: "自由ヶ丘執行委員会 財政",
        },
        {
            id: "3",
            label: "2028年卒業見込み",
        },
    ],
};

const WORKS = [
    {
        id: "veridea",
        name: "Veridea",
        tagline: "根拠を辿れる知財探索の場",
        description:
            "特許文書を起点にアイデア生成・類似特許検索・協業先マッチングを行うWebアプリです。根拠を辿れる状態でLLMの生成物を観察できる空間を提供します。数百万件の特許公報・特許分類・法人情報を管理する自前のDBとAPIを整備し、バックエンドからフロントエンドまで一貫して実装しています。",
        stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Drizzle ORM"],
        badge: "開発中",
        github: null,
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
        stack: ["Next.js", "FastAPI", "Docling", "Docker"],
        badge: null,
        github: "https://github.com/takahiro-hirano67/academic-reader",
        imagesLabel: "アプリケーション画面",
        imagesSubLabel: "画面",
        images: ["/works/academic-reader/screenshot-1.png"],
    },
    {
        id: "bingo",
        name: "ziyuu-sikkou-bingo-num",
        tagline: "イベント景品番号管理アプリ",
        description:
            "自由ヶ丘執行委員会（学生組織）で利用するビンゴ大会の景品割り当てを自動化するWebアプリです。手作業による人為的ミスと参加人数変動への対応という構造的な問題を、Fisher-Yatesシャッフルで根本から解決しました。",
        stack: ["Next.js", "TypeScript"],
        badge: null,
        github: "https://github.com/takahiro-hirano67/ziyuu-sikkou-bingo-num",
        imagesLabel: "アプリケーション画面",
        imagesSubLabel: "画面",
        images: [
            "/works/bingo/screenshot-1.jpg",
            "/works/bingo/screenshot-2.jpg",
            "/works/bingo/screenshot-3.jpg",
            "/works/bingo/screenshot-4.jpg",
        ],
    },
];

const RESEARCH_LIST = [
    {
        id: "tech-matching",
        title: "特許をベースとする大規模言語モデルを用いた技術マッチング",
        subtitle: "形態素解析を用いたハルシネーション評価手法",
        description:
            "LLMを用いて特許技術を融合させ新規アイデアを生み出す際、もっともらしい事実の捏造（ハルシネーション）による論理飛躍が大きな課題となります。本研究では、生成テキストが特許原文（事実）にどれだけ基づいているかを定量的に評価する手法を確立し、各種プロンプト（生成手法）がハルシネーションに与える影響を検証しました。",
        imagesLabel: "説明スライド（抜粋）",
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

const SKILLS = [
    {
        category: "バックエンド・データ",
        items: [
            {
                name: "Python",
                period: "2年",
                usage: "インターン・研究",
                note: "メイン言語。FastAPIを用いたAPI構築や、Docling・PyMuPDF等を利用した特許解析・データ処理で活用。",
            },
            {
                name: "PostgreSQL",
                period: "1年半",
                usage: "インターン・研究",
                note: "数百万件の特許・法人データベースを構築。JSONB型の活用や、pgvectorを用いた意味検索などを運用。",
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
                note: "Next.jsと組み合わせた開発の主軸。型安全性を担保し、Drizzle ORM等と連携して活用。",
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
                note: "DockerfileやDocker Composeを用いた、複数コンテナ（API + DBなど）の開発環境構築。",
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

// ============================================================
// ルートコンポーネント
// ============================================================

export default function Portfolio() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Works />
                <Research />
                <Skills />
            </main>
            <Footer />
        </div>
    );
}

// ============================================================
// ヘッダー
// ============================================================

function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-border-light border-b bg-surface/85 px-6 backdrop-blur-md">
            <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between">
                {/* 左側: 名前 */}
                <span className="font-medium font-serif text-caption text-text-base tracking-wide transition-colors hover:text-accent">
                    {HEADER_DATA.title}
                </span>

                {/* 右側: ナビゲーション */}
                <div className="flex items-center gap-4 min-[480px]:gap-6">
                    {HEADER_DATA.links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hidden text-text-mid text-tiny transition-colors hover:text-accent min-[480px]:block"
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href={HEADER_DATA.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm border border-border-base px-3 py-1.5 text-text-mid text-tiny transition-colors hover:border-accent hover:text-accent"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}

// ============================================================
// 基本情報
// ============================================================

function Hero() {
    return (
        <section id="about" className="flex flex-col justify-center bg-bg-base px-6 pt-42 pb-12">
            <div className="mx-auto w-full max-w-4xl">
                {/* トップヘッダー: 所属(左) / バッジ(右) */}
                <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    {/* メインの所属 */}
                    {PROFILE.affiliation && (
                        <p className="font-medium text-text-soft text-tiny uppercase tracking-widest">
                            {PROFILE.affiliation}
                        </p>
                    )}

                    {/* ステータスバッジ群 */}
                    {PROFILE.badges && PROFILE.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {PROFILE.badges.map((badge) => (
                                <span
                                    key={badge.id}
                                    className="rounded-sm border border-border-base px-2 py-1 font-medium text-text-soft text-tiny tracking-tight"
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* 名前 */}
                <h1 className="mb-8 font-semibold font-serif text-4xl text-text-base leading-tight">{PROFILE.name}</h1>

                {/* 自己紹介文 */}
                <div className="max-w-2xl">
                    <p className="text-body text-text-mid leading-relaxed">{PROFILE.description}</p>
                </div>
            </div>
        </section>
    );
}

// ============================================================
// 制作物
// ============================================================

function Works() {
    // 表示中の制作物ID
    const [activeWorkId, setActiveWorkId] = useState<string | null>(null);
    // 表示中の画像のインデックス
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ビューアーの開閉とインデックスのリセット
    const toggleImages = (workId: string) => {
        if (activeWorkId === workId) {
            setActiveWorkId(null);
            setCurrentImageIndex(0);
        } else {
            setActiveWorkId(workId);
            setCurrentImageIndex(0);
        }
    };

    return (
        <section id="works" className="bg-bg-base px-6 py-12">
            <div className="mx-auto w-full max-w-4xl">
                {/* セクションヘッダー */}
                <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                    <h2 className="font-heading font-serif text-text-base text-title">制作物</h2>
                    <span className="text-text-soft text-tiny">{WORKS.length} projects</span>
                </div>

                {/* 制作物一覧 */}
                <div className="space-y-6">
                    {WORKS.map((work) => (
                        <div key={work.id}>
                            {/* カード */}
                            <div
                                className="rounded-sm border transition-all"
                                style={{
                                    background: "var(--color-surface)",
                                    borderColor: "var(--color-border-base)",
                                    boxShadow: activeWorkId === work.id ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                                    padding: "1.5rem",
                                }}
                            >
                                {/* カードヘッダー */}
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <div className="mb-1 flex items-center gap-2">
                                            <h3 className="font-medium text-body text-text-base">{work.name}</h3>
                                            {work.badge && (
                                                <span className="rounded-sm bg-accent-bg px-2 py-0.5 font-medium text-accent text-tiny">
                                                    {work.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-caption text-text-mid">{work.tagline}</p>
                                    </div>

                                    {/* アクション */}
                                    <div className="flex shrink-0 items-center gap-2">
                                        {work.github && (
                                            <a
                                                href={work.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-sm border border-border-base px-3 py-1.5 text-text-mid text-tiny transition-colors hover:border-accent hover:text-accent"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {work.images && work.images.length > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => toggleImages(work.id)}
                                                className="rounded-sm px-3 py-1.5 font-medium text-tiny transition-colors"
                                                style={{
                                                    background:
                                                        activeWorkId === work.id
                                                            ? "var(--color-accent)"
                                                            : "var(--color-accent-bg)",
                                                    color: activeWorkId === work.id ? "#fff" : "var(--color-accent)",
                                                }}
                                            >
                                                {activeWorkId === work.id
                                                    ? `${work.imagesSubLabel}を閉じる`
                                                    : `${work.imagesSubLabel}を見る`}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* 説明 */}
                                <p className="mb-4 text-caption text-text-mid leading-relaxed">{work.description}</p>

                                {/* スタック */}
                                <div className="flex flex-wrap gap-1.5">
                                    {work.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-sm bg-bg-base px-2 py-0.5 text-text-mid text-tiny"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* スクリーンショット表示エリア（スライダー形式） */}
                            {work.images && work.images.length > 0 && activeWorkId === work.id && (
                                <div
                                    className="mt-2 overflow-hidden rounded-sm border bg-surface"
                                    style={{ borderColor: "var(--color-border-base)" }}
                                >
                                    {/* ヘッダーラベル: タイトルと枚数表示 */}
                                    <div className="flex items-center justify-between border-border-light border-b bg-bg-subtle px-4 py-2">
                                        <span className="font-medium text-text-mid text-tiny">
                                            {work.name} — {work.imagesLabel}
                                        </span>
                                        {work.images.length > 1 && (
                                            <span className="font-medium text-text-mid text-tiny">
                                                {currentImageIndex + 1} / {work.images.length}
                                            </span>
                                        )}
                                    </div>

                                    {/* スライダー本体 */}
                                    <div className="group relative bg-bg-subtle p-2">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={work.images[currentImageIndex]}
                                                alt={`${work.name}の${work.imagesSubLabel} ${currentImageIndex + 1}`}
                                                width={1920}
                                                height={1080}
                                                className="h-auto w-full rounded-sm object-contain"
                                                quality={90}
                                            />
                                        </div>

                                        {/* ナビゲーションボタン（複数枚ある時のみ） */}
                                        {work.images.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex(
                                                            (prev) =>
                                                                (prev - 1 + work.images.length) % work.images.length,
                                                        )
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`前の${work.imagesSubLabel}`}
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex((prev) => (prev + 1) % work.images.length)
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`次の${work.imagesSubLabel}`}
                                                >
                                                    →
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================
// 研究
// ============================================================

function Research() {
    // どの研究の画像を表示しているか
    const [activeResearchId, setActiveResearchId] = useState<string | null>(null);
    // 表示中の研究において、何枚目の画像を表示しているか
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ビューアーの開閉とインデックスのリセットを一元管理
    const toggleImages = (researchId: string) => {
        if (activeResearchId === researchId) {
            setActiveResearchId(null);
            setCurrentImageIndex(0);
        } else {
            setActiveResearchId(researchId);
            setCurrentImageIndex(0);
        }
    };

    return (
        <section id="research" className="bg-bg-base px-6 py-12">
            <div className="mx-auto w-full max-w-4xl">
                {/* セクションヘッダー */}
                <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                    <h2 className="font-heading font-serif text-text-base text-title">研究</h2>
                    <span className="text-text-soft text-tiny">{RESEARCH_LIST.length} projects</span>
                </div>

                {/* 研究リスト */}
                <div className="space-y-6">
                    {RESEARCH_LIST.map((research) => (
                        <div key={research.id}>
                            {/* カード本体 */}
                            <div
                                className="rounded-sm border transition-all"
                                style={{
                                    background: "var(--color-surface)",
                                    borderColor: "var(--color-border-base)",
                                    boxShadow:
                                        activeResearchId === research.id ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                                    padding: "1.5rem",
                                }}
                            >
                                {/* カードヘッダー */}
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="mb-1 font-medium text-body text-text-base">{research.title}</h3>
                                        {research.subtitle && (
                                            <p className="text-caption text-text-mid">{research.subtitle}</p>
                                        )}
                                    </div>

                                    {/* 画像表示ボタン */}
                                    {research.images && research.images.length > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => toggleImages(research.id)}
                                            className="shrink-0 rounded-sm px-3 py-1.5 font-medium text-tiny transition-colors"
                                            style={{
                                                background:
                                                    activeResearchId === research.id
                                                        ? "var(--color-accent)"
                                                        : "var(--color-accent-bg)",
                                                color:
                                                    activeResearchId === research.id ? "#fff" : "var(--color-accent)",
                                            }}
                                        >
                                            {activeResearchId === research.id
                                                ? `${research.imagesSubLabel}を閉じる`
                                                : `${research.imagesSubLabel}を見る`}
                                        </button>
                                    )}
                                </div>

                                {/* 概要 */}
                                {research.description && (
                                    <p className="mb-6 text-caption text-text-mid leading-relaxed">
                                        {research.description}
                                    </p>
                                )}

                                <div className="space-y-6">
                                    {/* 主な発見・提案 */}
                                    {research.findings && research.findings.length > 0 && (
                                        <div className="space-y-2 border-border-light border-t pt-5">
                                            <p className="font-medium text-text-soft text-tiny uppercase tracking-widest">
                                                主な発見・提案
                                            </p>
                                            <div className="space-y-2">
                                                {research.findings.map((finding) => (
                                                    <div
                                                        key={finding.label}
                                                        className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                                                    >
                                                        <p className="shrink-0 font-medium text-caption text-text-base sm:w-48">
                                                            {finding.label}
                                                        </p>
                                                        <p className="text-caption text-text-mid leading-relaxed">
                                                            {finding.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 成果 */}
                                    {research.achievements && research.achievements.length > 0 && (
                                        <div className="space-y-2 border-border-light border-t pt-5">
                                            <p className="font-medium text-text-soft text-tiny uppercase tracking-widest">
                                                成果
                                            </p>
                                            <div className="space-y-2">
                                                {research.achievements.map((achievement) => (
                                                    <div key={achievement.id} className="flex flex-col gap-1">
                                                        <p className="font-medium text-caption text-text-base">
                                                            {achievement.label}
                                                        </p>
                                                        <p className="text-caption text-text-mid">
                                                            {achievement.description}
                                                        </p>
                                                        {achievement.url && (
                                                            <div className="text-caption">
                                                                <span className="text-text-base">URL: </span>
                                                                <a
                                                                    href={achievement.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-fit text-accent transition-colors hover:text-accent-hover hover:underline"
                                                                >
                                                                    {achievement.url}
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 画像表示エリア（スライダー形式） */}
                            {research.images && activeResearchId === research.id && (
                                <div
                                    className="mt-2 overflow-hidden rounded-sm border bg-surface"
                                    style={{ borderColor: "var(--color-border-base)" }}
                                >
                                    {/* ヘッダーラベル: タイトルと枚数表示 */}
                                    <div className="flex items-center justify-between border-border-light border-b bg-bg-subtle px-4 py-2">
                                        <span className="font-medium text-text-mid text-tiny">
                                            {research.title} — {research.imagesLabel}
                                        </span>
                                        {/* 複数枚ある時のみ枚数を表示 */}
                                        {research.images.length > 1 && (
                                            <span className="font-medium text-text-mid text-tiny">
                                                {currentImageIndex + 1} / {research.images.length}
                                            </span>
                                        )}
                                    </div>

                                    {/* スライダー本体 */}
                                    <div className="group relative bg-bg-subtle p-2">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={research.images[currentImageIndex]}
                                                alt={`${research.title}の${research.imagesSubLabel} ${currentImageIndex + 1}`}
                                                width={1920}
                                                height={1080}
                                                className="h-auto w-full rounded-sm object-contain shadow-sm"
                                                quality={90}
                                            />
                                        </div>

                                        {/* ナビゲーションボタン（複数枚ある時のみ） */}
                                        {research.images.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex(
                                                            (prev) =>
                                                                (prev - 1 + research.images.length) %
                                                                research.images.length,
                                                        )
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`前の${research.imagesSubLabel}`}
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex(
                                                            (prev) => (prev + 1) % research.images.length,
                                                        )
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`次の${research.imagesSubLabel}`}
                                                >
                                                    →
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================
// Skills
// ============================================================

function Skills() {
    return (
        <section id="skills" className="bg-bg-base px-6 py-12">
            <div className="mx-auto w-full max-w-4xl">
                <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                    <h2 className="font-heading font-serif text-text-base text-title">スキルセット</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {SKILLS.map((group) => (
                        <div key={group.category} className="rounded-sm border border-border-base bg-surface p-6">
                            <h3 className="mb-5 border-border-light border-b pb-2 font-medium text-text-soft text-tiny uppercase tracking-widest">
                                {group.category}
                            </h3>
                            <div className="space-y-6">
                                {group.items.map((item) => (
                                    <div key={item.name} className="flex flex-col gap-1.5">
                                        {/* ヘッダー: 左にスキル名、右にバッジ群 */}
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="font-medium text-caption text-text-base">{item.name}</span>
                                            <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
                                                {item.usage && (
                                                    <span className="rounded-sm bg-bg-subtle px-1.5 py-0.5 text-micro text-text-mid">
                                                        {item.usage}
                                                    </span>
                                                )}
                                                {item.period && (
                                                    <span className="rounded-sm bg-bg-subtle px-1.5 py-0.5 text-micro text-text-mid">
                                                        {item.period}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {/* 説明文 */}
                                        {item.note && (
                                            <p className="text-caption text-text-mid leading-relaxed">{item.note}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================
// フッター
// ============================================================

function Footer() {
    return (
        <footer className="border-border-base border-t px-6 py-6">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
                <span className="text-text-soft text-tiny">© 2026 Takahiro Hirano. All Rights Reserved.</span>
                <a
                    href="https://github.com/takahiro-hirano67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-soft text-tiny transition-colors hover:text-accent"
                >
                    GitHub →
                </a>
            </div>
        </footer>
    );
}
