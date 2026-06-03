"use client";

import Image from "next/image";
import { useState } from "react";
import type { WorkData } from "@/types";

interface WorksProps {
    works: WorkData[];
}

/**
 * 制作物セクション コンポーネント
 */
export default function Works({ works }: WorksProps) {
    // 表示中の制作物ID
    const [activeWorkId, setActiveWorkId] = useState<string | null>(null);
    // 表示中の画像のインデックス
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ビューアーの開閉とインデックスのリセット
    const toggleImages = (workId: string) => {
        if (activeWorkId === workId) {
            setActiveWorkId(null);
            setCurrentImageIndex(0);
        } else {
            setActiveWorkId(workId);
            setCurrentImageIndex(0);
        }
    };

    return (
        <section id="works" className="bg-bg-base px-6 py-12">
            <div className="mx-auto w-full max-w-4xl">
                {/* セクションヘッダー */}
                <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                    <h2 className="font-heading font-serif text-text-base text-title">制作物</h2>
                    <span className="text-text-soft text-tiny">{works.length} projects</span>
                </div>

                {/* 制作物一覧 */}
                <div className="space-y-6">
                    {works.map((work) => (
                        <div key={work.id}>
                            {/* カード */}
                            <div
                                className="rounded-sm border transition-all"
                                style={{
                                    background: "var(--color-surface)",
                                    borderColor: "var(--color-border-base)",
                                    boxShadow: activeWorkId === work.id ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                                    padding: "1.5rem",
                                }}
                            >
                                {/* カードヘッダー */}
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <div className="mb-1 flex items-center gap-2">
                                            <h3 className="font-medium text-body text-text-base">{work.name}</h3>
                                            {work.badge && (
                                                <span className="rounded-sm bg-accent-bg px-2 py-0.5 font-medium text-accent text-tiny">
                                                    {work.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-caption text-text-mid">{work.tagline}</p>
                                    </div>

                                    {/* アクション */}
                                    <div className="flex shrink-0 items-center gap-2">
                                        {/* リンク配列を展開してボタンを生成 */}
                                        {work.links?.map((link) => (
                                            <a
                                                key={link.id}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-sm border border-border-base px-3 py-1.5 text-text-mid text-tiny transition-colors hover:border-accent hover:text-accent"
                                            >
                                                {link.label}
                                            </a>
                                        ))}

                                        {/* 画像トグルボタン */}
                                        {work.images && work.images.length > 0 && (
                                            <button
                                                type="button"
                                                title="画像開閉ボタン"
                                                onClick={() => toggleImages(work.id)}
                                                className="rounded-sm px-3 py-1.5 font-medium text-tiny transition-colors"
                                                style={{
                                                    background:
                                                        activeWorkId === work.id
                                                            ? "var(--color-accent)"
                                                            : "var(--color-accent-bg)",
                                                    color: activeWorkId === work.id ? "#fff" : "var(--color-accent)",
                                                }}
                                            >
                                                {activeWorkId === work.id
                                                    ? `${work.imagesSubLabel}を閉じる`
                                                    : `${work.imagesSubLabel}を見る`}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* 説明 */}
                                <p className="mb-4 text-caption text-text-mid leading-relaxed">{work.description}</p>

                                {/* スタック */}
                                <div className="flex flex-wrap gap-1.5">
                                    {work.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-sm bg-bg-base px-2 py-0.5 text-text-mid text-tiny"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 画像表示エリア（スライダー形式） */}
                            {work.images && work.images.length > 0 && activeWorkId === work.id && (
                                <div
                                    className="mt-2 overflow-hidden rounded-sm border bg-surface"
                                    style={{ borderColor: "var(--color-border-base)" }}
                                >
                                    {/* ヘッダーラベル: タイトルと枚数表示 */}
                                    <div className="flex items-center justify-between border-border-light border-b bg-bg-subtle px-4 py-2">
                                        <span className="font-medium text-text-mid text-tiny">
                                            {work.name} — {work.imagesLabel}
                                        </span>
                                        {work.images.length > 1 && (
                                            <span className="font-medium text-text-mid text-tiny">
                                                {currentImageIndex + 1} / {work.images.length}
                                            </span>
                                        )}
                                    </div>

                                    {/* スライダー本体 */}
                                    <div className="group relative bg-bg-subtle p-2">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={work.images[currentImageIndex]}
                                                alt={`${work.name}の${work.imagesSubLabel} ${currentImageIndex + 1}`}
                                                width={1920}
                                                height={1080}
                                                className="h-auto w-full rounded-sm object-contain"
                                                quality={90}
                                            />
                                        </div>

                                        {/* ナビゲーションボタン（複数枚ある時のみ） */}
                                        {work.images.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex(
                                                            (prev) =>
                                                                (prev - 1 + work.images.length) % work.images.length,
                                                        )
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`前の${work.imagesSubLabel}`}
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex((prev) => (prev + 1) % work.images.length)
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`次の${work.imagesSubLabel}`}
                                                >
                                                    →
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
