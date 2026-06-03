import Link from "next/link";
import type { HeaderData } from "@/types";

interface HeaderProps {
    data: HeaderData;
}

/**
 * ヘッダー コンポーネント
 */
export default function Header({ data }: HeaderProps) {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-border-light border-b bg-surface/85 px-6 backdrop-blur-md">
            <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between">
                {/* 左側： 名前 */}
                <Link
                    href="/"
                    className="font-medium font-serif text-caption text-text-base tracking-wide transition-colors hover:text-accent"
                >
                    {data.title}
                </Link>

                {/* 右側: ナビゲーション */}
                <nav className="flex items-center gap-4 min-[480px]:gap-6">
                    {data.navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hidden text-text-mid text-tiny transition-colors hover:text-accent min-[480px]:block"
                        >
                            {link}
                        </a>
                    ))}
                    {/* 外部リンク */}
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
                    </div>
                </nav>
            </div>
        </header>
    );
}
