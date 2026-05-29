// src/config/font-config.ts

import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

/**
 * Noto Sans JP
 *
 * ゴシック体 (サンセリフ体)
 * UI要素 (操作する領域)
 */
export const notoSansJp = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    preload: false,
    variable: "--font-noto-sans-jp",
    display: "swap",
    fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "sans-serif"],
});

/**
 * Noto Serif JP
 *
 * 明朝体 (セリフ体)
 * 本文・見出し (読む領域)
 */
export const notoSerifJp = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    preload: false,
    variable: "--font-noto-serif-jp",
    display: "swap",
    fallback: ["Hiragino Mincho ProN", "Yu Mincho", "serif"],
});
