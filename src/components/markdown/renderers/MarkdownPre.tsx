import type { ComponentPropsWithoutRef } from "react";

interface MarkdownPreProps extends ComponentPropsWithoutRef<"pre"> {
    node?: unknown;
}

/**
 * Markdown <pre>タグ用コンポーネント
 * pre タグのラッパーを外し、内部の code タグ（CodeBlock.tsx）にスタイルと構造の制御を委譲する
 */
const MarkdownPre = ({ children }: MarkdownPreProps) => {
    return <>{children}</>;
};
export default MarkdownPre;
