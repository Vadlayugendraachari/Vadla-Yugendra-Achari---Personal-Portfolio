import { motion } from 'framer-motion'

type EduItem = {
    school: string
    detail: string
    period: string
    marks?: string // e.g., 'CGPA: 8.5/10' or 'Percentage: 92%'
}

const edu: EduItem[] = [
    { school: 'JNTUACEP', detail: 'B.Tech', period: '2022 - 2026', marks: 'CGPA: 6.89/10' },
    { school: 'Pragathi Junior College', detail: 'Intermediate', period: '2020 - 2022', marks: 'Percentage: 74%' },
    { school: 'ZPHS Gooty', detail: 'SSC', period: '2019 - 2020', marks: 'GPA: 8.8/10' },
]

export const Education = () => {
    return (
        <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <div className="mt-6 relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-6">
                    {edu.map((e, i) => (
                        <motion.div key={e.school} className="relative pl-10" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                            <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 bg-primary-600 shadow-soft" />
                            <div className="card p-5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="font-semibold mr-2">{e.school}</h3>
                                    {e.marks && (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                            {e.marks}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{e.detail}</p>
                                <p className="text-xs text-slate-500 mt-1">{e.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
