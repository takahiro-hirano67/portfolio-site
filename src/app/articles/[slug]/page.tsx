import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/articles/ArticleDetail";
import { ARTICLES } from "@/data/articles-data";

// 事前にビルドするパスを生成（静的書き出しのため）
export async function generateStaticParams() {
    return ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

/**
 * 記事詳細閲覧ページ
 */
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
            <ArticleDetail article={article} content={content} />
        </div>
    );
}
