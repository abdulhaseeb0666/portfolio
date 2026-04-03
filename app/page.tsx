import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import CVAndCertificates from "./components/CV_Certificate";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 space-y-10">
      <Hero />
      <Skills />
      <CVAndCertificates />
      <Projects />
      <SocialLinks />
    </main>
  );
}