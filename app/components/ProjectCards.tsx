type Props = {
  title: string;
  desc: string;
  link: string;
};

export default function ProjectCard({ title, desc , link }: Props) {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}