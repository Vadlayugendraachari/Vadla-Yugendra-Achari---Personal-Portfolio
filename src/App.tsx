import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SEO } from './components/SEO'

export default function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
    )

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') root.classList.add('dark')
        else root.classList.remove('dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <SEO />
            <Navbar theme={theme} setTheme={setTheme} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Research />
                <Education />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
