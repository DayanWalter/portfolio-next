import Contact from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro-section";
import Projects from "@/components/project-section";
import Skills from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
