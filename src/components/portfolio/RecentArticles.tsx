import Link from "next/link";
import { ARTICLES } from "@/data/articles-data";

/**
 * トップページ用の最新記事ピックアップセクション
 */
export default function RecentArticles() {
    // 記事を日付の降順（新しい順）にソートし、最新の3件のみを抽出
    const recentArticles = [...ARTICLES]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    if (recentArticles.length === 0) return null;

    return (
        <section id="articles">
            {/* セクションヘッダー */}
            <div className="mb-12 border-border-base border-b pb-4">
                <h2 className="font-heading font-serif text-text-base text-title">最近の記事</h2>
            </div>

            {/* 記事リスト（コンパクト版） */}
            <div className="flex flex-col gap-6">
                {recentArticles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/articles/${article.slug}`}
                        className="group flex flex-col gap-2 rounded-sm border border-border-light bg-surface px-6 py-5 transition-colors hover:border-accent/30"
                    >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <time className="text-text-soft text-tiny tracking-wider">{article.date}</time>
                            {article.tags && article.tags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-1">
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-sm bg-bg-subtle px-1.5 py-0.5 text-micro text-text-mid"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <h3 className="font-medium font-serif text-body text-text-base transition-colors group-hover:text-accent">
                            {article.title}
                        </h3>
                    </Link>
                ))}
            </div>

            {/* すべての記事への導線 */}
            <div className="mt-10 flex justify-center">
                <Link
                    href="/articles"
                    className="group flex items-center gap-2 rounded-sm border border-border-base bg-surface px-8 py-3 font-medium text-caption text-text-mid transition-all hover:border-accent hover:text-accent"
                >
                    すべての記事を見る
                    {/* ホバー時に矢印が少し右に動くマイクロインタラクション */}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
            </div>
        </section>
    );
}
