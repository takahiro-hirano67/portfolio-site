// src/app/layout.tsx

import type { Metadata } from "next";
import { notoSansJp, notoSerifJp } from "@/config/font-config";
import "./globals.css";

export const metadata: Metadata = {
    title: "Takahiro Hirano | 平野貴大のポートフォリオサイト",
    description: "平野貴大のポートフォリオサイト。ITエンジニア就活生 / 制作物、研究内容、スキルセットをご紹介します。",
};

/**
 * トップレベルのレイアウト
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ja"
            suppressHydrationWarning
            className={`${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
        >
            <body suppressHydrationWarning={true} className="flex min-h-full flex-col font-sans">
                {children}
            </body>
        </html>
    );
}
