"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number; // 表示を少し遅らせたい時のためのオプション
}

/**
 * スクロールに合わせたアニメーションのラッパーコンポーネント
 */
export default function FadeIn({ children, delay = 0 }: FadeInProps) {
    return (
        <motion.div
            // 初期状態: 透明(opacity: 0)で、少し下(y: 20)に配置
            initial={{ opacity: 0, y: 20 }}
            // 画面に入った時: 不透明(opacity: 1)になり、元の位置(y: 0)へ移動
            whileInView={{ opacity: 1, y: 0 }}
            // viewportの設定:
            // once: true (アニメーションは1回だけ実行)
            // margin: "-100px" (画面の下から100px入った所で発火させる)
            viewport={{ once: true, margin: "-100px" }}
            // アニメーションの時間とイージング（動きのなめらかさ）
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
