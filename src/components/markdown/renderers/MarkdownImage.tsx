import Image from "next/image";

interface MarkdownImageProps {
    src?: string | Blob;
    alt?: string;
    width?: string | number | null;
    height?: string | number | null;
}

/**
 * Markdown <img>タグ用コンポーネント
 */
const MarkdownImage = ({ src, alt, width, height }: MarkdownImageProps) => {
    // src が存在しない、または文字列でない（Blobなどの）場合は処理をスキップ
    if (!src || typeof src !== "string") return null;

    // プラグイン（rehype-img-size）が取得した実際の画像サイズを数値型に変換
    const imgWidth = typeof width === "number" ? width : parseInt(width || "0", 10);
    const imgHeight = typeof height === "number" ? height : parseInt(height || "0", 10);

    return (
        <div className="my-6 flex w-full justify-center">
            <Image
                src={src}
                alt={alt || "記事画像"}
                width={imgWidth || 768} // フォールバック値を指定
                height={imgHeight || 432} // フォールバック値を指定
                // 画面幅に合わせて縮小し、かつ巨大な画像は最大横幅で抑える
                className="h-auto w-auto max-w-full rounded-lg object-contain"
                sizes="(max-w-768px) 100vw, 768px"
            />
        </div>
    );
};
export default MarkdownImage;
