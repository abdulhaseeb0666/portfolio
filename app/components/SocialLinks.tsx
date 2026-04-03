export default function SocialLinks() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Connect With Me
      </h2>

      <div className="flex justify-center gap-6">
        {[
          { name: "GitHub", link: "https://github.com/abdulhaseeb0666" },
          { name: "LinkedIn", link: "https://www.linkedin.com/in/abdul-haseeb-1a35b433b" },
          { name: "Instagram", link: "https://www.instagram.com/abdulhaseeb0666/" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            className="px-5 py-2 border border-gray-600 rounded-lg hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition"
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
}