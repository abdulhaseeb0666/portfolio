const skills = ["HTML" , "CSS", "JavaScript", "Next.js", "React", "TypeScript", "Tailwind", "GSAP"];

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white shadow rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}