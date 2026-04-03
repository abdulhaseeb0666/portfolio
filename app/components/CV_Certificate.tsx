import React from "react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
};

const certificates: Certificate[] = [
  {
    id: "cert_001",
    title: "Frontend Development",
    issuer: "Talha Tariq",
    date: "2026",
    link: "/Certificate-Frontend-Web-Dev-&-9-Proven-Methods-to-Earn-Abdul-Haseeb.pdf",
  },
  {
    id: "cert_002",
    title: "Google Cybersecurity Professional Certificate V2",
    issuer: "Coursera",
    date: "2025",
    link: "https://www.credly.com/badges/61b6c387-5906-4e9e-938c-e11c402d5f17/linked_in_profile",
  },
];

export default function CVAndCertificates() {
  return (
    <section className="w-full px-6 py-10 bg-gray-50">
      
      {/* CV Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Curriculum Vitae</h2>

        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
            <p className="text-gray-700">
              Download my latest CV to learn more about my experience, skills, and projects.
            </p>
        </div>

        <div className="flex gap-4">
            <a href="/AbdulHaseebResume.pdf" download className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 text-center">
                Download CV
            </a>
            <a href={"/AbdulHaseebResume.pdf"} target="_blank" className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 text-center">
                View CV
            </a>
        </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>

        {certificates.length === 0 ? (
          <p className="text-gray-600">No certificates added yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-5 rounded-lg shadow border"
              >
                <h3 className="text-lg font-semibold mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-3">{cert.date}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}