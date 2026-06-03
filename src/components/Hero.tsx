import { LuExternalLink } from "react-icons/lu";
import type { ProfileData } from "@/types";

interface ProfileProps {
    profile: ProfileData;
}

/**
 * 基本情報セクション コンポーネント
 */
export default function Hero({ profile }: ProfileProps) {
    return (
        <section id="about" className="flex flex-col justify-center bg-bg-base px-6 pt-42 pb-6">
            <div className="mx-auto w-full max-w-4xl">
                {/* トップヘッダー: 所属(左) / バッジ(右) */}
                <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    {/* メインの所属 */}
                    {profile.affiliation && (
                        <p className="font-medium text-text-soft text-tiny uppercase tracking-widest">
                            {profile.affiliation}
                        </p>
                    )}

                    {/* ステータスバッジ群 */}
                    {profile.badges && profile.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {profile.badges.map((badge) => (
                                <span
                                    key={badge.id}
                                    className="rounded-sm border border-border-base px-2 py-1 font-medium text-text-soft text-tiny tracking-tight"
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* 名前 */}
                <h1 className="mb-8 font-semibold font-serif text-4xl text-text-base leading-tight">{profile.name}</h1>

                {/* 自己紹介文 */}
                <div className="mb-6 max-w-2xl">
                    <p className="text-body text-text-mid leading-relaxed">{profile.description}</p>
                </div>

                {/* 外部リンク */}
                {profile.externalLinks && profile.externalLinks.length > 0 && (
                    <div className="max-w-2xl">
                        <p className="mb-2 font-medium text-text-soft text-tiny uppercase tracking-widest">
                            外部リンク
                        </p>
                        <div className="flex flex-wrap gap-x-6">
                            {profile.externalLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`${link.label}へのリンク`}
                                    className="flex items-center gap-1 font-medium text-caption text-text-mid transition-colors hover:text-accent"
                                >
                                    {link.label}{" "}
                                    <span className="text-text-mid text-tiny">
                                        <LuExternalLink />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
