import { motion } from 'framer-motion'
import { FiFileText } from 'react-icons/fi'

type Cert = { name: string; issuer: string; year?: string; proofUrl?: string }

const certs: Cert[] = [
    {
        name: 'HTML, CSS, and Javascript for Web Developers',
        issuer: 'Coursera',
        proofUrl: 'https://coursera.org/share/1d7987855f9e4d027b6fd77426d3f265',
    },
    {
        name: 'Introduction to Front-End Development',
        issuer: 'Coursera',
        proofUrl: 'https://coursera.org/share/3a5547bba970ce628a6d609ee7926929',
    },
    {
        name: 'Open FPGA Tools Exploration',
        issuer: 'IIT Dharwad',
        proofUrl: 'https://drive.google.com/file/d/1d88rzY17sEZBY8ldzPX1LRlbCZIB5EHp/view?usp=drivesdk',
    },
]

export const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <h2 className="section-title">Certifications</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((c, i) => (
                    <motion.div
                        key={c.name}
                        className="card p-5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <h3 className="font-semibold">{c.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{c.issuer}</p>
                        {c.year && (
                            <p className="text-xs text-slate-500 mt-1">{c.year}</p>
                        )}
                        {c.proofUrl && (
                            <a
                                href={c.proofUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-ghost mt-3 inline-flex"
                            >
                                <FiFileText /> View Certificate
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
