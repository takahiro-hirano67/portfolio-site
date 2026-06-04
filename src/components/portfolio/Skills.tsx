import type { SkillGroup } from "@/types";

interface SkillsProps {
    skills: SkillGroup[];
}

/**
 * スキルセットセクション コンポーネント
 */
export default function Skills({ skills }: SkillsProps) {
    return (
        <section id="skills">
            <div className="mb-12 flex items-end justify-between border-border-base border-b pb-4">
                <h2 className="font-heading font-serif text-text-base text-title">スキルセット</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                {skills.map((group) => (
                    <div key={group.category} className="rounded-sm border border-border-base bg-surface p-6">
                        <h3 className="mb-5 border-border-light border-b pb-2 font-medium text-text-soft text-tiny uppercase tracking-widest">
                            {group.category}
                        </h3>
                        <div className="space-y-6">
                            {group.items.map((item) => (
                                <div key={item.name} className="flex flex-col gap-1.5">
                                    {/* ヘッダー: 左にスキル名、右にバッジ群 */}
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="font-medium text-caption text-text-base">{item.name}</span>
                                        <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
                                            {item.usage && (
                                                <span className="rounded-sm bg-bg-subtle px-1.5 py-0.5 text-micro text-text-mid">
                                                    {item.usage}
                                                </span>
                                            )}
                                            {item.period && (
                                                <span className="rounded-sm bg-bg-subtle px-1.5 py-0.5 text-micro text-text-mid">
                                                    {item.period}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* 説明文 */}
                                    {item.note && (
                                        <p className="text-caption text-text-mid leading-relaxed">{item.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
