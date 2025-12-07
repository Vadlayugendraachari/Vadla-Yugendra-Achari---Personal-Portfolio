import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
    {
        title: 'Community Forum',
        stack: ['React', 'Node.js', 'Express', 'MongoDB'],
        description:
            'A scalable forum platform with authentication, real-time notifications, and rich discussions.',
        image: '/community forum.png',
        github: 'https://github.com/Vadlayugendraachari/community-forum-client',
        demo: '#',
    },
    {
        title: 'Househunt',
        stack: ['React', 'MUI', 'Node.js', 'MongoDB', 'JWT', 'Multer'],
        description: 'A modern real estate listing platform with secure uploads and advanced filters.',
        image: '/house hunt.png',
        github: 'https://github.com/Vadlayugendraachari/Househunt',
        demo: '#',
    },
    {
        title: 'Personal Portfolio Website',
        stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
        description:
            'A top-tier personal portfolio with dark/light mode, smooth scroll, glassmorphism UI, and animated sections.',
        image: '/yugi photofolio.png',
        github: 'https://github.com/Vadlayugendraachari/Vadla-Yugendra-Achari---Personal-Portfolio',
        demo: '#',
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Selected work</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <motion.article key={p.title} className="group card overflow-hidden" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                        <div className="relative h-56 overflow-hidden">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-start gap-3">
                                <h3 className="text-xl font-semibold flex-1">{p.title}</h3>
                                <div className="flex items-center gap-2 text-slate-500">
                                    <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-primary-600"><FiGithub /></a>
                                    {p.demo !== '#' && (
                                        <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-primary-600"><FiExternalLink /></a>
                                    )}
                                </div>
                            </div>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.stack.map(s => (
                                    <span key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
