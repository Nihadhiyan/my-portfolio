// 1. Changed 'Link' to 'Linkedin' to avoid conflict with Next.js Link
import { ExternalLink, Code2, UserCircle, Mail } from "lucide-react";
import Link from "next/link"; // Use Next.js Link for internal routing

export default function Home() {
  const projects = [
    {
      title: "ZAM ZAM POS System",
      description: "A modern retail POS system with real-time inventory tracking, sales analytics, and an intuitive UI.",
      link: "/projects/zamzam", // Internal link
      tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    },
    {
      title: "Audio Signal Analyzer",
      description: "A Python-based system for extracting and analyzing audio features including MFCC, pitch detection, and wave transformations.",
      link: "/projects/audio", // Internal link
      tags: ["Python", "Signal Processing", "NumPy", "MATLAB"],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
      {/* 👤 BIO SECTION */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
          I&apos;m <span className="text-blue-500">Nihadh.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          I am a Software Engineering undergraduate at the University of Kelaniya. I specialize in building high-performance scalable systems and data-driven applications.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
            <Code2 size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
            <UserCircle size={20} />
          </a>
          <a href="mailto:hello@example.com" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
            <Mail size={20} />
          </a>
        </div>
      </section>

      {/* 🚀 PROJECTS SECTION */}
      <section id="projects" className="space-y-8">
        <h2 className="text-2xl font-bold border-b border-zinc-800 pb-2">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold flex items-center justify-between">
                {project.title}
                {/* 2. Wrapped icon in a Next.js Link for navigation */}
                <Link href={project.link}>
                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-blue-500 transition-colors" />
                </Link>
              </h3>
              <p className="mt-2 text-zinc-400 text-sm">{project.description}</p>
              <div className="mt-4 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-zinc-800 rounded text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📩 CONTACT FOOTER */}
      <footer className="text-center py-10 border-t border-zinc-900">
        <p className="text-zinc-500 text-sm">© 2026 Nihadh • Built with Next.js</p>
      </footer>
    </main>
  );
}