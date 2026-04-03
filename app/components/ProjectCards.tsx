type Props = {
  title: string;
  desc: string;
  link: string;
};

export default function ProjectCard({ title, desc , link }: Props) {
  return (
    <div className="group relative bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/30 transition">

      <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition"></div>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">{desc}</p>

      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline relative z-10">
        View Project →
      </a>
    </div>
  );
}