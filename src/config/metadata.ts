import type { Metadata } from "next";

const siteName = "Takahiro Hirano | 平野貴大のポートフォリオサイト";
const description =
    "平野貴大のポートフォリオサイト。ITエンジニア就活生 / 制作物、研究内容、スキルセットをご紹介します。";
// ※Vercel等でデプロイした際の本番URL
export const SITE_URL = "https://takahiro-hirano67.vercel.app";

export const siteMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description,
    openGraph: {
        title: siteName,
        description,
        url: SITE_URL,
        siteName,
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: siteName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description,
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};
