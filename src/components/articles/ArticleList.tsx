import Link from "next/link";
import type { ArticleData } from "@/types";

interface ArticleListProps {
    articles: ArticleData[];
}

/**
 * 記事一覧コンポーネント
 */
export default function ArticleList({ articles }: ArticleListProps) {
    // 記事を日付の降順（新しい順）にソート
    const sortedArticles = [...articles].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="mx-auto w-full max-w-3xl">
            {/* ページヘッダー */}
            <header className="mb-10 border-border-base border-b pb-4">
                <h1 className="font-heading font-serif text-display text-text-base tracking-wide">記事一覧</h1>
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
