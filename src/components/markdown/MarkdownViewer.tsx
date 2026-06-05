import "@/components/markdown/markdown-style.css"; // Markdown用CSS
import "katex/dist/katex.min.css"; // 数式用CSS
import ReactMarkdown, { type Components } from "react-markdown"; // Markdownレンダリング
// --- プラグイン ---
import rehypeImgSize from "rehype-img-size"; // マークダウンに書かれた画像のパスを元に、実際の画像ファイル（public/images/pic.png）のサイズを自動測定
import rehypeKatex from "rehype-katex"; // 数式描画ライブラリを利用してHTML化
import remarkBreaks from "remark-breaks"; // 改行を<br>として扱う
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown (GFM) の記法を適用
import { remarkAlert } from "remark-github-blockquote-alert"; // GitHubスタイルの警告表示適用
import remarkMath from "remark-math"; // 数式記法の認識（$E=mc^2$ や $$...$$など）
import remarkUnwrapImages from "remark-unwrap-images"; // 画像だけの行から p タグを取り除く
// 補助関数
import preprocessContent from "./markdown-utils";
// レンダリング用コンポーネント
import CodeBlock from "./renderers/MarkdownCodeBlock";
import MarkdownImage from "./renderers/MarkdownImage";
import MarkdownLink from "./renderers/MarkdownLink";
import MarkdownParagraph from "./renderers/MarkdownParagraph";
import MarkdownPre from "./renderers/MarkdownPre";

interface MarkdownViewerProps {
    content: string;
    className?: string;
    customComponents?: Components; // 外部から独自のタグ処理を注入可能
}

/**
 * Markdownを成形・スタイリングしてレンダリングする汎用コンポーネント
 *
 * @param content - レンダリングしたい文字列
 * @param className - 付与したいスタイル
 * @param customComponents - 独自処理のコンポーネント
 */
const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content, className, customComponents }) => {
    // 前処理を実行
    const processedContent = preprocessContent(content);

    return (
        <div className={`markdown ${className || ""}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks, remarkMath, remarkAlert, remarkUnwrapImages]}
                rehypePlugins={[rehypeKatex, [rehypeImgSize, { dir: "public" }]]}
                components={{
                    // 特定のタグに応じてカスタムコンポーネントに置き換える
                    p: MarkdownParagraph,
                    pre: MarkdownPre,
                    code: CodeBlock,
                    img: MarkdownImage,
                    a: MarkdownLink,
                    // 外部からのカスタムコンポーネントで上書き・追加
                    ...customComponents,
                }}
            >
                {processedContent}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer;
