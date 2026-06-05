"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import type { HeaderData } from "@/types";
import Sidebar from "./Sidebar";

interface HeaderProps {
    data: HeaderData;
}

/**
 * ヘッダー コンポーネント
 */
export default function Header({ data }: HeaderProps) {
    // モバイルメニューの開閉状態
    const [isOpen, setIsOpen] = useState(false);

    // ヘッダーの表示状態と、スクロール検知用のRef
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // スクロール検知によるヘッダーの表示・非表示制御
    useEffect(() => {
        const handleScroll = () => {
            // メニューが開いている間はヘッダーを隠さない
            if (isOpen) return;

            const currentScrollY = window.scrollY;

            // ページ最上部付近では常に表示 (iOSのバウンススクロール対策含む)
            if (currentScrollY <= 0) {
                setIsVisible(true);
            }
            // 下に10px以上スクロールしたら隠す
            else if (currentScrollY > lastScrollY.current + 1) {
                setIsVisible(false);
            }
            // 上に10px以上スクロールしたら表示する
            else if (currentScrollY < lastScrollY.current - 1) {
                setIsVisible(true);
            }

            // 直前のスクロール位置を更新
            lastScrollY.current = currentScrollY;
        };

        // passive: true を指定してスクロールパフォーマンスを最適化
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 right-0 left-0 z-50 border-border-light border-b bg-surface/85 px-6 backdrop-blur-md transition-transform duration-300 ease-in-out ${
                    isVisible ? "translate-y-0" : "-translate-y-full min-[480px]:translate-y-0"
                }`}
            >
                <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between">
                    {/* 左側： 名前 */}
                    <Link
                        href="/portfolio"
                        className="font-medium font-serif text-caption text-text-base tracking-wide transition-colors hover:text-accent"
                    >
                        {data.title}
                    </Link>

                    {/* 右側: ナビゲーション */}
                    <nav className="flex items-center gap-4 min-[480px]:gap-6">
                        {/* PC向けナビゲーションリンク */}
                        {data.navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.url}
                                className="hidden text-text-mid text-tiny transition-colors hover:text-accent min-[480px]:block"
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* 外部リンク & モバイル用メニューボタン */}
                        <div className="flex items-center gap-2">
                            {data.sns.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`${item.label}へのリンク`}
                                    className="rounded-sm border border-border-base bg-surface/50 px-3 py-1.5 text-text-mid text-tiny transition-colors hover:border-accent hover:text-accent"
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* ハンバーガーボタン / 閉じるボタン (画面幅480px未満で表示) */}
                            <button
                                type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="flex items-center justify-center rounded-sm p-1.5 text-text-mid transition-colors hover:bg-bg-subtle hover:text-accent min-[480px]:hidden"
                                aria-label="メニューを切り替える"
                            >
                                {isOpen ? <LuX size={20} /> : <LuMenu size={20} />}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* --- モバイル用 右サイドバー (ドロワー) --- */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} navLinks={data.navLinks} />
        </>
    );
}
