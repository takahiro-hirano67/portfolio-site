/**
 * テキスト前処理関数
 *
 * @param content - MarkdownViewerに挿入されるテキスト
 */
export default function preprocessContent(content: string): string {
    if (!content) return "";

    let processed = content;

    // 1. MathDelimiters normalization
    // Doclingなどが出力する \[ ... \] や \( ... \) を $$...$$ や $...$ に変換
    processed = processed.replace(/\\\[([\s\S]*?)\\\]/g, "$$$$$1$$$$");
    processed = processed.replace(/\\\(([\s\S]*?)\\\)/g, "$$$1$$");

    // 2. KaTeX Aligned Fix
    // 数式内に '&' (整列) があり、かつ環境指定(\begin)がない場合、
    // KaTeXがエラーになるため、自動的に aligned 環境で囲む
    processed = processed.replace(/\$\$([\s\S]*?)\$\$/g, (match, equation) => {
        // 既に環境指定(\begin)がある場合は何もしない
        if (equation.includes("\\begin")) return match;

        // '&' (整列タブ) が含まれている場合、補正対象とする
        if (equation.includes("&")) {
            // $$ の内側に改行を入れ、aligned環境で囲むことで
            // remark-math にブロック数式として認識させ、かつ整列を有効にする
            return `$$\n\\begin{aligned}\n${equation}\n\\end{aligned}\n$$`;
        }

        return match;
    });

    // 4. Code Block normalization
    // コードブロックの ``` の直前に改行がないと正しくパースされない場合への対処
    processed = processed.replace(/([^\n])```/g, "$1\n```");

    return processed;
}
