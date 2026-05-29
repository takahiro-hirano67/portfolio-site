// src/app/page.tsx

"use client";

import { useState } from "react";

// --- データ ---
const WORKS = [
    {
        id: "veridia",
        name: "Veridia",
        tagline: "根拠を辿れる知財探索の場",
        description:
            "特許文書を起点にアイデア生成・類似特許検索・協業先マッチングを行うWebアプリ。生成AIのハルシネーションを可視化し、LLMが参照した根拠をユーザーが追跡できる設計を貫いた。約300万件の特許公報・特許分類・法人情報を管理する自前のDBとAPIを整備し、バックエンドからフロントエンドまで一貫して実装している。",
        stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Drizzle ORM"],
        badge: "開発中",
        hasDemo: true,
        github: null,
    },
    {
        id: "academic-reader",
        name: "academic-reader",
        tagline: "学術論文PDFの構造化ビューワー",
        description:
            "Doclingを用いて複雑な段組み・数式・図版を含む論文PDFを正確に構造化し、ブラウザ上でMarkdownとして表示するローカル専用ツール。ブラウザの翻訳機能をそのまま使える点が特徴。",
        stack: ["Next.js", "FastAPI", "Docling", "Docker"],
        badge: null,
        hasDemo: false,
        github: "https://github.com/takahiro-hirano67/academic-reader",
    },
    {
        id: "bingo",
        name: "ziyuu-sikkou-bingo-num",
        tagline: "イベント景品番号管理アプリ",
        description:
            "ビンゴ大会の景品割り当てを自動化するWebアプリ。手作業による人為的ミスと参加人数変動への対応という構造的な問題を、Fisher-Yatesシャッフルで根本から解決した。",
        stack: ["Next.js", "TypeScript"],
        badge: null,
        hasDemo: false,
        github: "https://github.com/takahiro-hirano67/ziyuu-sikkou-bingo-num",
    },
];

const SKILLS = [
    { category: "言語", items: ["Python", "TypeScript", "JavaScript"] },
    { category: "フロントエンド", items: ["Next.js", "React", "Tailwind CSS"] },
    { category: "バックエンド", items: ["FastAPI", "PostgreSQL", "Drizzle ORM"] },
    { category: "インフラ", items: ["Docker", "Vercel"] },
    {
        category: "生成AI",
        items: ["RAG", "Function Calling", "ストリーミング生成", "プロンプトエンジニアリング"],
    },
];

// ============================================================
// ルートコンポーネント
// ============================================================

export default function Portfolio() {
    return (
        <div>
            <Nav />
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
// Nav
// ============================================================

function Nav() {
    const links = ["About", "Works", "Research", "Skills"];

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 border-border-light border-b bg-surface/85 backdrop-blur-md">
            <div className="mx-auto flex h-12 max-w-4xl items-center justify-end">
                <div className="flex items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-text-mid text-tiny transition-colors hover:text-accent"
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="https://github.com/takahiro-hirano67"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm border border-border-base px-3 py-1.5 text-text-mid text-tiny transition-colors hover:border-accent hover:text-accent"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}

// ============================================================
// Hero
// ============================================================

function Hero() {
    return (
        <section id="about" className="flex flex-col justify-center bg-bg-base px-6 pt-42 pb-12">
            <div className="mx-auto w-full max-w-4xl">
                {/* ラベル */}
                <p className="mb-6 font-medium text-text-soft text-tiny uppercase tracking-widest">
                    愛知工業大学 経営学部 経営情報システム専攻
                </p>

                {/* 名前 */}
                <h1 className="mb-8 font-semibold font-serif text-4xl text-text-base leading-tight">平野 貴大</h1>

                {/* 自己紹介文 */}
                <p className="mb-10 max-w-xl text-body text-text-mid leading-relaxed">
                    生成AIのハルシネーション検証・知財探索システムの開発に取り組んでいます。
                </p>
            </div>
        </section>
    );
}

// ============================================================
// Works
// ============================================================

function Works() {
    const [activeDemo, setActiveDemo] = useState<string | null>(null);

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
                                className="rounded-sm border p-6 transition-all"
                                style={{
                                    background: "var(--color-surface)",
                                    borderColor:
                                        activeDemo === work.id ? "var(--color-accent)" : "var(--color-border-base)",
                                    boxShadow: activeDemo === work.id ? "0 2px 12px rgba(61,82,160,0.08)" : "none",
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
                                        {work.hasDemo && (
                                            <button
                                                type="button"
                                                onClick={() => setActiveDemo(activeDemo === work.id ? null : work.id)}
                                                className="rounded-sm px-3 py-1.5 font-medium text-tiny transition-colors"
                                                style={{
                                                    background:
                                                        activeDemo === work.id
                                                            ? "var(--color-accent)"
                                                            : "var(--color-accent-bg)",
                                                    color: activeDemo === work.id ? "#fff" : "var(--color-accent)",
                                                }}
                                            >
                                                {activeDemo === work.id ? "デモを閉じる" : "デモを見る"}
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

                            {/* デモ埋め込みエリア */}
                            {work.hasDemo && activeDemo === work.id && (
                                <div
                                    className="mt-2 overflow-hidden rounded-sm border"
                                    style={{ borderColor: "var(--color-accent)" }}
                                >
                                    {/* デモラベル */}
                                    <div className="flex items-center justify-between border-accent border-b bg-accent-bg px-4 py-2">
                                        <span className="font-medium text-accent text-tiny">
                                            Veridia — アイデア生成レポート (モックデータ)
                                        </span>
                                        <span className="text-accent text-tiny">APIなし / 静的デモ</span>
                                    </div>

                                    {/* デモ本体 (移植したVerideaページが入る領域) */}
                                    <div
                                        className="flex items-center justify-center bg-bg-base"
                                        style={{ height: "600px" }}
                                    >
                                        <p className="text-caption text-text-soft">
                                            ここにVerideaのデモページが入ります
                                        </p>
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
// Research
// ============================================================

function Research() {
    return (
        <section id="research" className="bg-bg-base px-6 py-12">
            <div className="mx-auto w-full max-w-4xl">
                <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                    <h2 className="font-heading font-serif text-text-base text-title">研究</h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* 研究概要 */}
                    <div>
                        <p className="mb-3 font-medium text-text-soft text-tiny uppercase tracking-widest">
                            研究テーマ
                        </p>
                        <h3 className="mb-4 font-semibold font-serif text-subheading text-text-base leading-relaxed">
                            特許をベースとする大規模言語モデルを用いた技術マッチング
                            <br />
                            ——形態素解析を用いたハルシネーション評価手法
                        </h3>
                        <div className="rounded-sm border border-border-base bg-surface px-4 py-3">
                            <p className="font-medium text-accent text-tiny">最優秀発表賞</p>
                            <p className="mt-0.5 text-text-mid text-tiny">
                                一般社団法人日本設備管理学会 東海支部 令和7年度学生研究発表会
                            </p>
                        </div>
                    </div>

                    {/* 指標と結論 */}
                    <div>
                        <p className="mb-3 font-medium text-text-soft text-tiny uppercase tracking-widest">
                            提案指標・主な発見
                        </p>
                        <div className="space-y-3">
                            {[
                                {
                                    label: "P_src（原典適合率）",
                                    desc: "LLM生成文に含まれる用語のうち原文に存在する割合を形態素解析で定量化する独自指標",
                                },
                                {
                                    label: "批判的レビューの逆効果",
                                    desc: "見栄えの向上が事実性の希薄化を招くトレードオフを統計的に示した",
                                },
                            ].map((item) => (
                                <div key={item.label} className="rounded-sm border border-border-base bg-surface p-3">
                                    <p className="mb-1 font-medium text-caption text-text-base">{item.label}</p>
                                    <p className="text-caption text-text-mid leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
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

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS.map((group) => (
                        <div key={group.category}>
                            <p className="mb-3 font-medium text-text-soft text-tiny uppercase tracking-widest">
                                {group.category}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-sm border border-border-base bg-surface px-2.5 py-1 text-caption text-text-base"
                                    >
                                        {item}
                                    </span>
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
// Footer
// ============================================================

function Footer() {
    return (
        <footer className="mx-auto flex max-w-4xl items-center justify-between border-border-base border-t px-6 py-6">
            <span className="text-text-soft text-tiny">© 2026 Takahiro Hirano. All Rights Reserved.</span>
            <a
                href="https://github.com/takahiro-hirano67"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-soft text-tiny transition-colors hover:text-accent"
            >
                GitHub →
            </a>
        </footer>
    );
}
