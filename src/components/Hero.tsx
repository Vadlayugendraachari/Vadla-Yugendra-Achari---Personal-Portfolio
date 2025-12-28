import { motion } from 'framer-motion'
import { FiDownloadCloud, FiGithub, FiLinkedin } from 'react-icons/fi'

export const Hero = () => {
    return (
        <section id="hero" className="section">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left max-w-2xl mx-auto md:mx-0"
                >
                    <p className="text-primary-600 font-semibold tracking-wide uppercase text-xs sm:text-sm">Frontend Developer</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-3">
                        Vadla Yugendra Achari
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
                        I build web applications with the MERN stack, focusing on clean architecture, performance,
                        and delightful user experiences.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                        <a
                            href="https://drive.google.com/file/d/1YqZMJ8bGm1oKWRoX8SRCMQRbNcGV4s1i/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary w-full sm:w-auto justify-center"
                        >
                            <FiDownloadCloud /> Download Resume
                        </a>
                        <a
                            href="https://github.com/Vadlayugendraachari"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost w-full sm:w-auto justify-center"
                        >
                            <FiGithub /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vadla-yugendra-achari-4a25b722b/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost w-full sm:w-auto justify-center"
                        >
                            <FiLinkedin /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-sm w-full mx-auto md:ml-auto"
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
