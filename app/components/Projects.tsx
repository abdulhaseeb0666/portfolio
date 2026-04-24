import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "RecipeNow",
    desc: "All recipies at one place",
    link: "https://recipe-now-ah.vercel.app/"
  },
  {
    title: "Monetra",
    desc: "Track income, expenses and budgets",
    link: "https://monetra-by-haseeb.vercel.app/",
  },
  {
    title: "CartNova",
    desc: "Front-end shopping platform",
    link: "https://cartnova-ah.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-10 text-center bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} link={p.link} />
        ))}
      </div>
    </section>
  );
}