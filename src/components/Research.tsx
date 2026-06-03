"use client";

import Image from "next/image";
import { useState } from "react";
import type { ResearchData } from "@/types";

interface ResearchProps {
    researchList: ResearchData[];
}

/**
 * 研究セクション コンポーネント
 */
export default function Research({ researchList }: ResearchProps) {
    // どの研究の画像を表示しているか
    const [activeResearchId, setActiveResearchId] = useState<string | null>(null);
    // 表示中の研究において、何枚目の画像を表示しているか
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ビューアーの開閉とインデックスのリセットを一元管理
    const toggleImages = (researchId: string) => {
        if (activeResearchId === researchId) {
            setActiveResearchId(null);
            setCurrentImageIndex(0);
        } else {
            setActiveResearchId(researchId);
            setCurrentImageIndex(0);
        }
    };

    return (
        <section id="research" className="bg-bg-base px-6 py-12">
            <div className="mx-auto w-full max-w-4xl">
                {/* セクションヘッダー */}
                <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                    <h2 className="font-heading font-serif text-text-base text-title">研究</h2>
                    <span className="text-text-soft text-tiny">{researchList.length} projects</span>
                </div>

                {/* 研究リスト */}
                <div className="space-y-6">
                    {researchList.map((research) => (
                        <div key={research.id}>
                            {/* カード本体 */}
                            <div
                                className="rounded-sm border transition-all"
                                style={{
                                    background: "var(--color-surface)",
                                    borderColor: "var(--color-border-base)",
                                    boxShadow:
                                        activeResearchId === research.id ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                                    padding: "1.5rem",
                                }}
                            >
                                {/* カードヘッダー */}
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="mb-1 font-medium text-body text-text-base">{research.title}</h3>
                                        {research.subtitle && (
                                            <p className="text-caption text-text-mid">{research.subtitle}</p>
                                        )}
                                    </div>

                                    {/* 画像表示ボタン */}
                                    {research.images && research.images.length > 0 && (
                                        <button
                                            type="button"
                                            title="画像開閉ボタン"
                                            onClick={() => toggleImages(research.id)}
                                            className="shrink-0 rounded-sm px-3 py-1.5 font-medium text-tiny transition-colors"
                                            style={{
                                                background:
                                                    activeResearchId === research.id
                                                        ? "var(--color-accent)"
                                                        : "var(--color-accent-bg)",
                                                color:
                                                    activeResearchId === research.id ? "#fff" : "var(--color-accent)",
                                            }}
                                        >
                                            {activeResearchId === research.id
                                                ? `${research.imagesSubLabel}を閉じる`
                                                : `${research.imagesSubLabel}を見る`}
                                        </button>
                                    )}
                                </div>

                                {/* 概要 */}
                                {research.description && (
                                    <p className="mb-6 text-caption text-text-mid leading-relaxed">
                                        {research.description}
                                    </p>
                                )}

                                <div className="space-y-6">
                                    {/* 主な発見・提案 */}
                                    {research.findings && research.findings.length > 0 && (
                                        <div className="space-y-2 border-border-light border-t pt-5">
                                            <p className="font-medium text-text-soft text-tiny uppercase tracking-widest">
                                                主な発見・提案
                                            </p>
                                            <div className="space-y-2">
                                                {research.findings.map((finding) => (
                                                    <div
                                                        key={finding.label}
                                                        className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                                                    >
                                                        <p className="shrink-0 font-medium text-caption text-text-base sm:w-48">
                                                            {finding.label}
                                                        </p>
                                                        <p className="text-caption text-text-mid leading-relaxed">
                                                            {finding.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 成果 */}
                                    {research.achievements && research.achievements.length > 0 && (
                                        <div className="space-y-2 border-border-light border-t pt-5">
                                            <p className="font-medium text-text-soft text-tiny uppercase tracking-widest">
                                                成果
                                            </p>
                                            <div className="space-y-2">
                                                {research.achievements.map((achievement) => (
                                                    <div key={achievement.id} className="flex flex-col gap-1">
                                                        <p className="font-medium text-caption text-text-base">
                                                            {achievement.label}
                                                        </p>
                                                        <p className="text-caption text-text-mid">
                                                            {achievement.description}
                                                        </p>
                                                        {achievement.url && (
                                                            <div className="text-caption">
                                                                <span className="text-text-base">URL: </span>
                                                                <a
                                                                    href={achievement.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-fit text-accent transition-colors hover:text-accent-hover hover:underline"
                                                                >
                                                                    {achievement.url}
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 画像表示エリア（スライダー形式） */}
                            {research.images && activeResearchId === research.id && (
                                <div
                                    className="mt-2 overflow-hidden rounded-sm border bg-surface"
                                    style={{ borderColor: "var(--color-border-base)" }}
                                >
                                    {/* ヘッダーラベル: タイトルと枚数表示 */}
                                    <div className="flex items-center justify-between border-border-light border-b bg-bg-subtle px-4 py-2">
                                        <span className="font-medium text-text-mid text-tiny">
                                            {research.title} — {research.imagesLabel}
                                        </span>
                                        {/* 複数枚ある時のみ枚数を表示 */}
                                        {research.images.length > 1 && (
                                            <span className="font-medium text-text-mid text-tiny">
                                                {currentImageIndex + 1} / {research.images.length}
                                            </span>
                                        )}
                                    </div>

                                    {/* スライダー本体 */}
                                    <div className="group relative bg-bg-subtle p-2">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={research.images[currentImageIndex]}
                                                alt={`${research.title}の${research.imagesSubLabel} ${currentImageIndex + 1}`}
                                                width={1920}
                                                height={1080}
                                                className="h-auto w-full rounded-sm object-contain shadow-sm"
                                                quality={90}
                                            />
                                        </div>

                                        {/* ナビゲーションボタン（複数枚ある時のみ） */}
                                        {research.images.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex(
                                                            (prev) =>
                                                                (prev - 1 + research.images.length) %
                                                                research.images.length,
                                                        )
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`前の${research.imagesSubLabel}`}
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setCurrentImageIndex(
                                                            (prev) => (prev + 1) % research.images.length,
                                                        )
                                                    }
                                                    className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full border border-border-strong bg-surface/80 p-1.5 text-text-mid opacity-0 transition-all hover:bg-surface hover:text-accent focus:opacity-100 group-hover:opacity-100"
                                                    aria-label={`次の${research.imagesSubLabel}`}
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
