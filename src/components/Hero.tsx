import { motion } from 'framer-motion'
import { FiDownloadCloud, FiGithub, FiLinkedin } from 'react-icons/fi'

export const Hero = () => {
    return (
        <section id="hero" className="section">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <p className="text-primary-600 font-semibold tracking-wide">Frontend Developer</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                        Vadla Yugendra Achari
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
                        I build web applications with MERN stack, focusing on clean architecture, performance,
                        and delightful user experiences.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <a href="https://drive.google.com/file/d/1oKsF8bDcCSCkeoCNpeCF70g2w4n3qJHJ/view?usp=drivesdk" target="_blank" rel="noreferrer" className="btn-primary">
                            <FiDownloadCloud /> Download Resume
                        </a>
                        <a href="https://github.com/Vadlayugendraachari" target="_blank" rel="noreferrer" className="btn-ghost">
                            <FiGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/vadla-yugendra-achari-4a25b722b/" target="_blank" rel="noreferrer" className="btn-ghost">
                            <FiLinkedin /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden card">
                        <img src="/yugi photofolio photo.jpeg" alt="Yugendra portrait" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-600/20 to-fuchsia-600/20 blur-3xl rounded-3xl"></div>
                </motion.div>
            </div>
        </section>
    )
}
