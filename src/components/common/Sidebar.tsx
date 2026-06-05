"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { NavLink } from "@/types";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    navLinks: NavLink[];
}

/**
 * モバイル用 右サイドバー（ドロワー）コンポーネント
 */
export default function Sidebar({ isOpen, setIsOpen, navLinks }: SidebarProps) {
    // メニューが開いている間は、背面のスクロールを無効化する
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {/* 1. 背景のオーバーレイ (クリックで閉じる) */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-text-base/20 transition-opacity min-[480px]:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* 2. ドロワーパネル本体 */}
            <div
                className={`fixed top-14 right-0 bottom-0 z-40 w-64 transform bg-bg-subtle shadow-xl transition-transform duration-300 ease-in-out min-[480px]:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* ドロワー内のリンク一覧 */}
                <div className="flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.url}
                            // リンクをタップしたらメニューを閉じる
                            onClick={() => setIsOpen(false)}
                            className="block rounded-sm px-4 py-3 font-medium text-body text-text-base transition-colors hover:bg-tag hover:text-accent"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
