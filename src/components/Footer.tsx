import { GitHubLink } from "@/data";

/**
 * フッター コンポーネント
 */
export default function Footer() {
    return (
        <footer className="mt-6 border-border-base border-t px-6 py-6 pt-6">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
                <span className="text-text-soft text-tiny">© 2026 Takahiro Hirano. All Rights Reserved.</span>
                <a
                    href={GitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHubへのリンク"
                    className="text-text-soft text-tiny transition-colors hover:text-accent"
                >
                    GitHub →
                </a>
            </div>
        </footer>
    );
}
