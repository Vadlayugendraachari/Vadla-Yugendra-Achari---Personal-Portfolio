import { FiMoon, FiSun } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

interface NavbarProps {
    theme: 'light' | 'dark'
    setTheme: (t: 'light' | 'dark') => void
}

export const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const navItems = [
        { to: 'hero', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'research', label: 'Research' },
        { to: 'education', label: 'Education' },
        { to: 'certifications', label: 'Certifications' },
        { to: 'contact', label: 'Contact' },
    ]

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-slate-900/75 border-b border-slate-200/60 dark:border-slate-800/60">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                <motion.a href="#hero" className="font-bold text-lg sm:text-xl tracking-tight" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-primary-600">Yugendra</span>
                    <span className="text-slate-700 dark:text-slate-200"> Achari</span>
                </motion.a>

                <ul className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                spy
                                smooth
                                offset={-80}
                                duration={500}
                                className="cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                                activeClass="text-primary-600 dark:text-primary-400"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <a href="https://drive.google.com/file/d/19yS-N30dXTZjtBCbYVo1eRSK9PTdNp36/view?usp=drivesdks" className="btn-ghost hidden sm:inline-flex" target="_blank" rel="noreferrer">Resume</a>
                    <button
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </button>
                </div>
            </nav>
        </header>
    )
}
