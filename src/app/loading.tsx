/**
 * ローディング画面
 */
export default function Loading() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-bg-base px-6">
            <div className="flex flex-col items-center gap-6">
                {/* シンプルなスピンアニメーション */}
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-border-base border-t-accent" />

                {/* 読み込み中テキスト */}
                <div className="flex flex-col items-center gap-1">
                    <p className="font-medium font-serif text-lg text-text-base tracking-widest">Loading</p>
                    <p className="font-medium text-[10px] text-text-soft uppercase tracking-widest">
                        Please wait a moment
                    </p>
                </div>
            </div>
        </div>
    );
}
