import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiPackage } from 'react-icons/fi'

const skills = [
    { name: 'Python', level: 40, icon: <FiCpu /> },

    { name: 'React', level: 50, icon: <FiCode /> },
    { name: 'Node.js', level: 50, icon: <FiPackage /> },
    { name: 'Express', level: 50, icon: <FiPackage /> },
    { name: 'MongoDB', level: 50, icon: <FiDatabase /> },
    { name: 'SQL', level: 50, icon: <FiDatabase /> },
    { name: 'Docker', level: 60, icon: <FiPackage /> },
    { name: 'Git', level: 70, icon: <FiGitBranch /> },
]

export const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Tools, languages, and frameworks</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((s, i) => (
                    <motion.div key={s.name} className="card p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <span className="text-xl text-primary-600">{s.icon}</span>
                            <span className="font-medium">{s.name}</span>
                            <span className="ml-auto text-sm text-slate-500">{s.level}%</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <motion.div className="h-full rounded-full bg-gradient-to-r from-primary-600 to-fuchsia-600" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
