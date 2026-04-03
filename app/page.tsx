import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import CVAndCertificates from "./components/CV_Certificate";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 text-white px-6 md:px-12 py-10 space-y-20">
      <Hero />
      <Skills />
      <CVAndCertificates />
      <Projects />
      <SocialLinks />
    </main>
  );
}