import { motion } from 'framer-motion'

export const Research = () => {
    return (
        <section id="research" className="section">
            <h2 className="section-title">Research Experience</h2>
            <p className="section-subtitle">IIT Dharwad</p>
            <motion.div className="mt-6 card p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-lg font-semibold">Research Intern — Open FPGA Tools Exploration</h3>
                <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                    <li>Worked on FPGA toolchains,simulation, and debugging.</li>
                    <li>Implemented and validated digital logic using Verilog/VHDL with testbenches.</li>

                </ul>
            </motion.div>
        </section>
    )
}
