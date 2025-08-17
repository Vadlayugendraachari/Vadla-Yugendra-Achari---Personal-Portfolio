import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiPackage, FiCloud } from 'react-icons/fi'
import { FaGithub, FaLinux, FaNetworkWired, FaServer } from 'react-icons/fa'

const languages = [
    { name: 'Python', icon: <FiCpu /> },
    { name: 'SQL', icon: <FiDatabase /> },
]

const skills = [
    { name: 'React', icon: <FiCode /> },
    { name: 'Node.js', icon: <FiPackage /> },
    { name: 'Express', icon: <FiPackage /> },
    { name: 'MongoDB', icon: <FiDatabase /> },
    { name: 'Docker', icon: <FiPackage /> },
    { name: 'Git', icon: <FiGitBranch /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Linux (Ubuntu, Nobara OS)', icon: <FaLinux /> },
    { name: 'Networking', icon: <FaNetworkWired /> },
    { name: 'VMs', icon: <FaServer /> },
]


export const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Languages</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.map((l, i) => (
                    <motion.div key={l.name} className="card p-5 flex items-center gap-3 text-slate-700 dark:text-slate-200" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                        <span className="text-2xl text-primary-600">{l.icon}</span>
                        <span className="font-medium text-lg">{l.name}</span>
                    </motion.div>
                ))}
            </div>
            <p className="section-subtitle mt-10">Skills & Frameworks</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((s, i) => (
                    <motion.div key={s.name} className="card p-5 flex items-center gap-3 text-slate-700 dark:text-slate-200" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                        <span className="text-2xl text-primary-600">{s.icon}</span>
                        <span className="font-medium text-lg">{s.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
