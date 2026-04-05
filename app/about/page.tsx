import { GraduationCap, Code2, Languages, Network, BarChart3, Briefcase } from "lucide-react";

export default function About() {
    const specializations = [
        { title: "Data Science & Engineering", icon: <BarChart3 size={20} />, color: "text-blue-400" },
        { title: "Business Engineering", icon: <Briefcase size={20} />, color: "text-blue-400" },
        { title: "Net-Centric Applications", icon: <Network size={20} />, color: "text-blue-400" }
    ];

    const techStack = [
        { category: "Core", items: ["React", "Next.js", "TypeScript", "Node.js"] },
        { category: "Specialized", items: ["Python", "SQL", "Cloud", "API Design"] }
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
            {/* 👤 INTRO SECTION */}
            <section className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
                    About <span className="text-blue-500">Me.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    I am a Software Engineering undergraduate at the University of Kelaniya.
                    I focus on building scalable, data-driven applications that solve real-world business problems.
                </p>
            </section>

            {/* 🧩 UOK SPECIALIZATIONS */}
            <section className="space-y-8">
                <h2 className="text-2xl font-bold border-b border-zinc-800 pb-2">Academic Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {specializations.map((domain) => (
                        <div key={domain.title} className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all flex flex-col gap-4">
                            <div className={`${domain.color} group-hover:scale-110 transition-transform origin-left`}>
                                {domain.icon}
                            </div>
                            <h3 className="font-bold text-lg text-zinc-200">{domain.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* 📚 EDUCATION & SKILLS */}
            <section className="space-y-8">
                <h2 className="text-2xl font-bold border-b border-zinc-800 pb-2">Background & Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* --- EDUCATION CARD --- */}
                    <div className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all space-y-4">
                        <div className="flex items-center gap-3 text-blue-500">
                            <GraduationCap size={24} />
                            <h3 className="text-xl font-bold text-white">Degree</h3>
                        </div>
                        <div>
                            <h4 className="font-bold text-zinc-200">BSc (Hons) in Software Engineering</h4>
                            <p className="text-sm text-zinc-500 mt-1">University of Kelaniya, Sri Lanka</p>
                            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                                Applying engineering principles to software development, focusing on the
                                full lifecycle of robust and maintainable systems.
                            </p>
                        </div>
                    </div>

                    {/* --- TECH STACK CARD --- */}
                    <div className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all space-y-4">
                        <div className="flex items-center gap-3 text-blue-500">
                            <Code2 size={24} />
                            <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                        </div>
                        <div className="space-y-5 pt-2">
                            {techStack.map((group) => (
                                <div key={group.category}>
                                    <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider">{group.category}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map(item => (
                                            <span key={item} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-zinc-800 rounded text-zinc-300">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🌍 LOCATION & LANGUAGES */}
            <section className="flex flex-col md:flex-row justify-between items-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-3">
                    <Languages className="text-zinc-500" size={20} />
                    <span className="text-sm font-medium text-zinc-300">Fluent in English & Sinhala</span>
                </div>
                <div className="text-sm text-zinc-500 mt-2 md:mt-0">Based in Colombo, Sri Lanka</div>
            </section>

            {/* 📩 CONSISTENT FOOTER */}
            <footer className="text-center py-10 border-t border-zinc-900">
                <p className="text-zinc-500 text-sm">© 2026 Nihadh • Built with Next.js</p>
            </footer>
        </main>
    );
}