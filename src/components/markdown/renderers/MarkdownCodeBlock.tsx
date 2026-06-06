"use client";

import dynamic from "next/dynamic";
import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
// --- Plugins ---
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter"; // コードハイライト
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // VSコード風のスタイル

/**
 * Mermaidコンポーネントを動的インポート（SSR無効化・Loading表示付き）
 * --> これにより、Mermaidが含まれないページでは巨大なライブラリが読み込まれない
 */
const MermaidPreview = dynamic(() => import("./Mermaid"), {
    ssr: false,
    loading: () => <div className="animate-pulse p-4 text-gray-400">Loading Diagram...</div>,
});

interface CodeBlockProps extends ComponentPropsWithoutRef<"code"> {
    inline?: boolean;
    node?: unknown;
}

/**
 * Markdown コードブロック用コンポーネント
 */
const CodeBlock = ({ node, inline, className, children, ...props }: CodeBlockProps) => {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match ? match[1] : "";
    const codeString = String(children).replace(/\n$/, "");
    const [isCopied, setIsCopied] = useState(false);

    // 【メモ】
    // react-markdown v9+ では inline プロパティが渡されないため、独自に判定。
    // 言語指定(match)がなく、かつコード文字列に改行(\n)が含まれていない場合をインラインとみなす。
    const isInline = inline ?? (!match && !codeString.includes("\n"));

    // 1. インラインコードの場合
    if (isInline) {
        return (
            <code className="inline-code" {...props}>
                {children}
            </code>
        );
    }

    // 2. Mermaidの場合
    if (lang === "mermaid") {
        return <MermaidPreview code={codeString} />;
    }

    // 共通のコピー処理
    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeString);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // 3. シンタックスハイライト（ヘッダー付きブロック）
    if (match) {
        return (
            <div className="my-6 overflow-hidden rounded border border-border-base bg-surface">
                {/* ヘッダー部分 */}
                <div className="flex items-center justify-between border-border-base border-b bg-surface-muted px-4 py-2">
                    <span className="select-none font-medium font-sans text-text-mid text-tiny">{lang}</span>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 text-color-text-soft text-tiny transition-colors hover:text-text-mid"
                        title="コードをクリップボードにコピー"
                    >
                        {isCopied ? (
                            <>
                                <LuCheck size={14} className="text-signal-success" />
                                <span className="font-medium font-sans text-signal-success">Copied!</span>
                            </>
                        ) : (
                            <>
                                <LuCopy size={14} />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>

                {/* コード本文 */}
                <SyntaxHighlighter
                    {...props}
                    style={vs}
                    language={lang}
                    PreTag="div"
                    customStyle={{
                        margin: 0,
                        padding: "1rem",
                        backgroundColor: "transparent",
                        border: "none",
                    }}
                    codeTagProps={{
                        style: {
                            backgroundColor: "transparent",
                            padding: 0, // CSS側のパディングを打ち消す
                            fontFamily: '"Fira Mono", "Menlo", "Consolas", monospace',
                            fontSize: "0.85rem",
                        },
                    }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        );
    }

    // 4. 言語指定なしのブロックコード（フォールバック）
    // ここに来るのは「言語指定はないが、複数行ある」場合
    return (
        <pre className="my-6 overflow-auto rounded border border-border-base bg-surface p-4">
            <code
                className={className}
                {...props}
                style={{
                    fontFamily: '"Fira Mono", "Menlo", "Consolas", monospace',
                    fontSize: "0.85rem",
                    color: "var(--color-text-base)",
                }}
            >
                {children}
            </code>
        </pre>
    );
};
export default CodeBlock;
