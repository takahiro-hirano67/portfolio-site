import ArticleList from "@/components/articles/ArticleList";
import { ARTICLES } from "@/data/articles-data";

/**
 * 記事一覧ページ
 */
export default function ArticlesPage() {
    return (
        <div>
            <ArticleList articles={ARTICLES} />
        </div>
    );
}
