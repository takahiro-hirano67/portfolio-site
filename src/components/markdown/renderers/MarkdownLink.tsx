import type { ComponentPropsWithoutRef } from "react";

interface MarkdownLinkProps extends ComponentPropsWithoutRef<"a"> {
    node?: unknown;
}

/**
 * Markdown <a>タグ用コンポーネント
 * 外部リンクを別タブで開く
 */
const MarkdownLink = ({ node, ...props }: MarkdownLinkProps) => {
    return <a {...props} target="_blank" rel="noopener noreferrer" />;
};

export default MarkdownLink;
