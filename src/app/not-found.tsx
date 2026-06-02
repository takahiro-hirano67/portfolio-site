import Link from "next/link";

/**
 * Not Foundページ
 */
export default function NotFound() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-bg-base px-6 text-center">
            {/* 404 タイトル */}
            <h1 className="mb-2 font-semibold font-serif text-6xl text-text-base">404</h1>

            {/* サブタイトル */}
            <p className="mb-8 font-medium text-text-soft text-tiny uppercase tracking-widest">Page Not Found</p>

            {/* メッセージ */}
            <p className="mb-8 text-body text-text-mid leading-relaxed">
                お探しのページは、削除されたか、
                <br className="sm:hidden" />
                URLが変更された可能性があります。
            </p>

            {/* トップへ戻るボタン */}
            <Link
                href="/"
                className="rounded-sm border border-border-base bg-surface px-6 py-2.5 font-medium text-text-base text-tiny shadow-sm transition-colors hover:border-accent hover:text-accent"
            >
                トップページに戻る
            </Link>
        </div>
    );
}
