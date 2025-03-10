import { AboutSection } from "@/src/components/About";
import { ContactSection } from "@/src/components/Contact";
import { Copyright } from "@/src/components/Copyright";
import { HomeSection } from "@/src/components/Home";
import { ProjectSection } from "@/src/components/Project";

export default function Home() {
  return (
    <>
      <section id="home" className="section">
        <HomeSection />
      </section>

      <section id="about" className="section">
        <AboutSection />
      </section>

      <section id="projects" className="section">
        <ProjectSection />
      </section>

      <section id="contact" className="section flex flex-col items-center justify-center relative">
        <ContactSection />
        <Copyright />
      </section>
    </>
  );
}
