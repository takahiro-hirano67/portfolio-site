import type { HeaderData } from "@/types";

// ============================================================
// リンク
// ============================================================

export const GitHubLink = "https://github.com/takahiro-hirano67";
export const QiitaLink = "https://qiita.com/takahiro-hirano67";
export const PortfolioRepoLink = "https://github.com/takahiro-hirano67/portfolio-site";

// ============================================================
// ヘッダー
// ============================================================

export const HEADER_DATA: HeaderData = {
    title: "Takahiro Hirano",
    navLinks: [
        { label: "About", url: "/portfolio#about" },
        { label: "Works", url: "/portfolio#works" },
        { label: "Research", url: "/portfolio#research" },
        { label: "Skills", url: "/portfolio#skills" },
        { label: "Articles", url: "/articles" },
    ],
    sns: [{ id: "1", label: "GitHub", url: GitHubLink }],
};
