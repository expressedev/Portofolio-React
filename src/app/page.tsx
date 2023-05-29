import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Business from "@/components/Business";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Pedro Aznarez Portofolios</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="shopify" className="snap-start">
        <Business />
      </section>
      <section id="contact" className="snap-center">
        {/* Contact Me */}
        <Contact />
      </section>
    </div>
  );
}
