import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import MarkdownViewer from "@/components/markdown/MarkdownViewer";
import type { ArticleData } from "@/types";

interface ArticleDetailProps {
    article: ArticleData;
    content: string;
}

/**
 * 記事詳細表示コンポーネント
 */
export default function ArticleDetail({ article, content }: ArticleDetailProps) {
    return (
        <article className="mx-auto w-full max-w-3xl">
            {/* 記事ヘッダー */}
            <header className="mb-10 border-border-base border-b pb-6">
                {/* 上段：日付とタグ ＆ 戻るボタン */}
                <div className="mb-4 flex items-start justify-between gap-4">
                    {/* 日付とタグ */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <time className="text-text-soft text-tiny tracking-wider">{article.date}</time>
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5">
                                {article.tags.map((tag) => (
                                    <span key={tag} className="rounded-sm bg-tag px-1.5 py-0.5 text-text-mid text-tiny">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 戻るボタン */}
                    <Link
                        href="/articles"
                        className="flex shrink-0 items-center gap-1.5 rounded-sm px-2 py-1 text-caption text-text-soft transition-colors hover:text-accent"
                    >
                        <LuArrowLeft size={16} />
                        記事一覧へ
                    </Link>
                </div>

                {/* タイトル */}
                <h1 className="mb-4 font-heading font-serif text-display text-text-base leading-tight">
                    {article.title}
                </h1>

                {/* 記事の概要 */}
                {article.description && (
                    <p className="text-body-sm text-text-mid leading-relaxed">{article.description}</p>
                )}
            </header>

            {/* Markdown本文 */}
            <div className="bg-bg-base">
                <MarkdownViewer content={content} />
            </div>
        </article>
    );
}
