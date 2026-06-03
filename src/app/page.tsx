import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import FadeIn from "@/components/FadeIn"; // ← 追加
import { HEADER_DATA, PROFILE, RESEARCH_LIST, SKILLS, WORKS } from "@/data";

/**
 * メインページ
 */
export default function Portfolio() {
    return (
        <div>
            <Header data={HEADER_DATA} />
            <main>
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
            </main>
            <Footer />
        </div>
    );
}
