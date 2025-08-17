import { useMemo, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined
    const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'yugendharachari285@gmail.com'

    const formsEndpoint = useMemo(() => (FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : undefined), [FORMSPREE_ID])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)

        // Simple honeypot check
        if ((data.get('website') as string)?.length) {
            setStatus('success')
            form.reset()
            return
        }

        // If Formspree configured, POST there; else fallback to mailto
        try {
            setStatus('loading')
            if (formsEndpoint) {
                const res = await fetch(formsEndpoint, {
                    method: 'POST',
                    body: data,
                    headers: { Accept: 'application/json' },
                })
                if (!res.ok) throw new Error('Failed to send')
                setStatus('success')
                form.reset()
            } else {
                const name = encodeURIComponent((data.get('name') as string) || '')
                const email = encodeURIComponent((data.get('email') as string) || '')
                const message = encodeURIComponent((data.get('message') as string) || '')
                const subject = `Portfolio Contact from ${name}`
                const body = `From: ${name}%0AEmail: ${email}%0A%0A${message}`
                window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
                setStatus('success')
                form.reset()
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="section">
            <h2 className="section-title">Get in touch</h2>
            <p className="section-subtitle">Open to opportunities and collaborations</p>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <form onSubmit={onSubmit} className="card p-6">
                    <div className="grid grid-cols-1 gap-4">
                        {/* Honeypot */}
                        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                        <label className="block">
                            <span className="text-sm">Name</span>
                            <input name="name" className="mt-1 w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70" required />
                        </label>
                        <label className="block">
                            <span className="text-sm">Email</span>
                            <input name="email" type="email" className="mt-1 w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70" required />
                        </label>
                        <label className="block">
                            <span className="text-sm">Message</span>
                            <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70" required />
                        </label>
                        <button className="btn-primary disabled:opacity-60" type="submit" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending…' : 'Send'}
                        </button>
                        <div className="min-h-[1.25rem]" aria-live="polite">
                            {status === 'success' && (
                                <p className="text-sm text-green-600">Thanks! I'll get back to you soon.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-600">Sorry, something went wrong. You can also email me at {CONTACT_EMAIL}.</p>
                            )}
                        </div>
                    </div>
                </form>

                <div className="space-y-4">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 btn-ghost">
                        <FiMail /> {CONTACT_EMAIL}
                    </a>
                    <a href="https://github.com/Vadlayugendraachari" target="_blank" rel="noreferrer" className="flex items-center gap-3 btn-ghost">
                        <FiGithub /> github.com/Vadlayugendraachari
                    </a>
                    <a href="https://www.linkedin.com/in/vadla-yugendra-achari-4a25b722b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 btn-ghost">
                        <FiLinkedin /> linkedin.com/in/vadla-yugendra-achari-4a25b722b
                    </a>
                </div>
            </div>
        </section>
    )
}
