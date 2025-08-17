import { motion } from 'framer-motion'

export const About = () => {
    return (
        <section id="about" className="section">
            <div className="max-w-3xl">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">A quick introduction</p>
                <motion.p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    I’m a Frontend Developer focused on the MERN stack, with strong expertise in debugging and problem-solving in Linux OS. I enjoy building clean, responsive applications and ensuring smooth functionality across the stack.
                </motion.p>
            </div>
        </section>
    )
}
