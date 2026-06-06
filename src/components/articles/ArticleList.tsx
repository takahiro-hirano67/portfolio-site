"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArticleData } from "@/types";

interface ArticleListProps {
    articles: ArticleData[];
}

type SortOrder = "order" | "date-desc" | "date-asc";

/**
 * 記事一覧コンポーネント
 */
export default function ArticleList({ articles }: ArticleListProps) {
    // ソート順の状態管理。デフォルトは 'order' 順
    const [sortOrder, setSortOrder] = useState<SortOrder>("order");

    // sortOrder に応じて記事をソートする
    const sortedArticles = useMemo(() => {
        const copied = [...articles];
        switch (sortOrder) {
            case "order":
                // 標準
                return copied.sort((a, b) => a.order - b.order);
            case "date-desc":
                // 日付の降順（新しい順）
                return copied.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            case "date-asc":
                // 日付の昇順（古い順）
                return copied.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            default:
                return copied;
        }
    }, [articles, sortOrder]);

    return (
        <div className="mx-auto w-full max-w-3xl">
            {/* ページヘッダー */}
            <header className="mb-10 border-border-base border-b pb-4">
                {/* 見出しとセレクトボックスを横並びに配置 */}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-heading font-serif text-display text-text-base tracking-wide">記事一覧</h1>

                    {/* ソート順切り替えセレクトボックス */}
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                        className="shrink-0 cursor-pointer rounded-sm border border-border-base bg-surface px-3 py-1.5 text-caption text-text-mid transition-colors hover:border-accent focus:border-accent focus:outline-none"
                        aria-label="記事の並び順"
                    >
                        <option value="id">標準</option>
                        <option value="date-desc">新しい順</option>
                        <option value="date-asc">古い順</option>
                    </select>
                </div>

                {/* 説明文 */}
                <p className="mt-4 text-caption text-text-mid">開発の裏側やシステム設計の思想、技術的な探求の記録。</p>
                <p className="text-caption text-text-mid">
                    技術ブログに投稿している記事とは異なり、より踏み込んだ内容を発信していきます。
                </p>
            </header>

            {/* 記事リスト */}
            <div className="flex flex-col gap-6">
                {sortedArticles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/articles/${article.slug}`}
                        className="group flex flex-col gap-3 rounded-sm border border-border-light bg-surface px-6 py-5 transition-all hover:border-accent/30"
                    >
                        <article className="flex flex-col items-start gap-2">
                            {/* 日付とタグ */}
                            <div className="mb-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                                <time className="text-text-soft text-tiny tracking-wider">{article.date}</time>
                                {article.tags && article.tags.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-sm bg-bg-subtle px-2 py-0.5 text-text-mid text-tiny"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* タイトル */}
                            <h2 className="font-medium font-serif text-text-base text-title transition-colors group-hover:text-accent">
                                {article.title}
                            </h2>

                            {/* 概要 */}
                            {article.description && (
                                <p className="mt-1 text-body-sm text-text-mid leading-relaxed">{article.description}</p>
                            )}
                        </article>
                    </Link>
                ))}

                {sortedArticles.length === 0 && (
                    <div className="py-12 text-center">
                        <p className="text-caption text-text-soft">記事がありません。</p>
                    </div>
                )}
            </div>
        </div>
    );
}
