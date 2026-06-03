import type { Metadata } from "next";
import { notoSansJp, notoSerifJp } from "@/config/font-config";
import { siteMetadata } from "@/config/metadata";
import "./globals.css";

// メタデータをエクスポート
export const metadata: Metadata = siteMetadata;

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
