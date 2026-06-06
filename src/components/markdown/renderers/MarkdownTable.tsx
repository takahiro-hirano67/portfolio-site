import type { ComponentPropsWithoutRef } from "react";

interface MarkdownTableProps extends ComponentPropsWithoutRef<"table"> {
    node?: unknown;
}

/**
 * Markdown <table>タグ用コンポーネント
 * 画面幅が狭い場合は横スクロールさせる
 */
const MarkdownTable = ({ node, ...props }: MarkdownTableProps) => {
    return (
        <div className="my-6 w-full overflow-x-auto">
            <table {...props} />
        </div>
    );
};

export default MarkdownTable;
