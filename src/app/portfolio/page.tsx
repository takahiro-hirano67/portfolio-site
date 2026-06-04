import FadeIn from "@/components/common/FadeIn";
import Hero from "@/components/portfolio/Hero";
import RecentArticles from "@/components/portfolio/RecentArticles";
import Research from "@/components/portfolio/Research";
import Skills from "@/components/portfolio/Skills";
import Works from "@/components/portfolio/Works";
import { PROFILE, RESEARCH_LIST, SKILLS, WORKS } from "@/data/portfolio-data";

/**
 * メインページ
 */
export default function Portfolio() {
    return (
        <div className="mx-auto w-full max-w-4xl space-y-18">
            {/* ページを開いた瞬間に見えるセクションはフェードインなし */}
            <Hero profile={PROFILE} />
            <Works works={WORKS} />

            {/* 以下のセクションは、スクロールして見えたらフェードインする */}
            <FadeIn>
                <Research researchList={RESEARCH_LIST} />
            </FadeIn>

            <FadeIn>
                <Skills skills={SKILLS} />
            </FadeIn>

            <FadeIn>
                <RecentArticles />
            </FadeIn>
        </div>
    );
}
