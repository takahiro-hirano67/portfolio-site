import { PortfolioRepoLink } from "@/data";

/**
 * フッター コンポーネント
 */
export default function Footer() {
    return (
        <footer className="mt-8 border-border-base border-t px-6 py-6">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
                {/* 左側: コピーライト */}
                <span className="text-text-soft text-tiny">© 2026 Takahiro Hirano. All Rights Reserved.</span>

                {/* 右側: リポジトリへのリンク */}
                <a
                    href={PortfolioRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="このサイトのリポジトリをGitHubで見る"
                    className="text-text-soft text-tiny transition-colors hover:text-accent"
                >
                    View this site's repository on GitHub →
                </a>
            </div>
        </footer>
    );
}
