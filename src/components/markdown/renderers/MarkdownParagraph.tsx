import type { ComponentPropsWithoutRef } from "react";

interface MarkdownParagraphProps extends ComponentPropsWithoutRef<"div"> {
    node?: unknown;
}
/**
 * Markdown <p>タグ用コンポーネント
 * pタグをdivタグに置き換えて、Hydrationエラーを回避（pタグの中にdiv(コードブロック)が入るのを防ぐため）
 */
const MarkdownParagraph = ({ node, className, children, ...props }: MarkdownParagraphProps) => {
    return (
        <div className={`mb-4 leading-relaxed ${className || ""}`} {...props}>
            {children}
        </div>
    );
};

export default MarkdownParagraph;
