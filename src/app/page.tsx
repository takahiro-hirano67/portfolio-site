import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import { HEADER_DATA, PROFILE, RESEARCH_LIST, SKILLS, WORKS } from "@/data";

/**
 * メインページ
 */
export default function Portfolio() {
    return (
        <div>
            <Header data={HEADER_DATA} />
            <main>
                <Hero profile={PROFILE} />
                <Works works={WORKS} />
                <Research researchList={RESEARCH_LIST} />
                <Skills skills={SKILLS} />
            </main>
            <Footer />
        </div>
    );
}
