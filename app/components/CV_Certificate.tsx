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
    <section className="space-y-12">

      {/* CV */}
      <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Curriculum Vitae</h2>
        <p className="text-gray-400 mb-6">Download or view my professional resume.</p>

        <div className="flex gap-4">
          <a href="/AbdulHaseebResume.pdf" download className="px-6 py-2 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition">
            Download
          </a>
          <a href="/AbdulHaseebResume.pdf" target="_blank" className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            View
          </a>
        </div>
      </div>

      {/* CERTIFICATES */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="group bg-gray-900 border border-gray-700 p-6 rounded-xl shadow hover:shadow-purple-500/20 transition">
              <h3 className="text-lg font-semibold group-hover:text-purple-400 transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mb-3">{cert.date}</p>

              {cert.link && (
                <a href={cert.link} target="_blank" className="text-blue-400 text-sm hover:underline">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}