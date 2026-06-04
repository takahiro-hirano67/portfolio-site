import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarkdownViewer from "@/components/markdown/MarkdownViewer";
import { ARTICLES, HEADER_DATA } from "@/data";

// 事前にビルドするパスを生成（静的書き出しのため）
export async function generateStaticParams() {
    return ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    // public/articles ディレクトリからMarkdownファイルを読み込む
    const filePath = path.join(process.cwd(), "public", "articles", `${slug}.md`);
    let content = "";
    try {
        content = fs.readFileSync(filePath, "utf-8");
    } catch {
        notFound();
    }

    return (
        <div>
            <Header data={HEADER_DATA} />
            <main className="flex-1 px-6 pt-42 pb-8">
                <article className="mx-auto w-full max-w-3xl">
                    {/* 記事ヘッダー */}
                    <header className="mb-10 border-border-base border-b pb-4">
                        <h1 className="mb-3 font-heading font-serif text-display text-text-base leading-tight">
                            {article.title}
                        </h1>
                        <time className="text-text-soft text-tiny tracking-wider">{article.date}</time>
                    </header>

                    {/* Markdown本文 */}
                    <div className="bg-bg-base">
                        <MarkdownViewer content={content} />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
