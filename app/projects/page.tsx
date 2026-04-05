import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const allProjects = [
        {
            title: "ZAM ZAM POS System",
            desc: "A modern retail POS system with real-time inventory tracking, sales analytics, and an intuitive UI.",
            link: "/projects/zamzam",
            github: "https://github.com", // Replace with your actual repo
            tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
        },
        {
            title: "Audio Signal Analyzer",
            desc: "A Python-based system for extracting and analyzing audio features including MFCC, pitch detection, and wave transformations.",
            link: "/projects/audio",
            github: "https://github.com",
            tags: ["Python", "Signal Processing", "NumPy", "MATLAB"],
        },
        {
            title: "Portfolio 2026",
            desc: "A high-performance, edge-ready personal portfolio built to showcase modern web engineering.",
            link: "/",
            github: "https://github.com",
            tags: ["React", "Next.js 16", "Tailwind CSS"],
        },
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
            {/* 🚀 HEADER SECTION */}
            <section className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
                    All <span className="text-blue-500">Projects.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    A collection of my work spanning full-stack web applications,
                    data-driven systems, and engineering experiments.
                </p>
            </section>

            {/* 🧩 PROJECT GRID */}
            <section className="space-y-8">
                <h2 className="text-2xl font-bold border-b border-zinc-800 pb-2">Archive</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allProjects.map((p, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all">

                            <h3 className="text-xl font-bold flex items-center justify-between">
                                {p.title}
                                <div className="flex items-center gap-3">
                                    <a href={p.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                                        <Code2 size={16} />
                                    </a>
                                    <Link href={p.link}>
                                        <ExternalLink size={16} className="text-zinc-500 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </div>
                            </h3>

                            <p className="mt-2 text-zinc-400 text-sm">{p.desc}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-zinc-800 rounded text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* 📩 CONSISTENT FOOTER */}
            <footer className="text-center py-10 border-t border-zinc-900">
                <p className="text-zinc-500 text-sm">© 2026 Nihadh • Built with Next.js</p>
            </footer>
        </main>
    );
}