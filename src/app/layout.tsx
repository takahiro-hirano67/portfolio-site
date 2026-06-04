import type { Metadata } from "next";
import { notoSansJp, notoSerifJp } from "@/config/font-config";
import { siteMetadata } from "@/config/metadata";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { HEADER_DATA } from "@/data/common-data";

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
            data-scroll-behavior="smooth" // 遷移時のみスムーススクロールを無効化 (競合するため)
            suppressHydrationWarning
            className={`${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
        >
            <body suppressHydrationWarning={true} className="flex min-h-full flex-col font-sans">
                <Header data={HEADER_DATA} />
                <main className="flex-1 px-6 pt-42 pb-12">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
