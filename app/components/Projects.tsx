import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Finance Tracker",
    desc: "Track income, expenses and budgets",
    link: "https://finance-management-by-haseeb.vercel.app/",
  },
  {
    title: "E-commerce Store",
    desc: "Front-end shopping platform",
    link: "https://cartnova-by-haseeb.vercel.app/"
  },
  {
    title: "Todo App",
    desc: "Track your tasks",
    link: "https://todotasks-by-haseeb.vercel.app/"
  },
  {
    title: "Solar System Animation",
    desc: "Just a Simple animation of the solar system",
    link: "https://solarsystem-animation-by-haseeb.vercel.app/"
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