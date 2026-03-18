// app/careers/page.tsx

import Link from 'next/link';

const OPENINGS = [
    { role: 'Senior Full Stack Developer',    type: 'Full-time', location: 'Remote',           tags: ['React', 'Node.js', 'PostgreSQL'],         hot: true,  desc: 'Build and scale our core product infrastructure. You will own critical features end-to-end, from architecture to deployment.'         },
    { role: 'UI/UX Designer',                 type: 'Full-time', location: 'Hybrid · Butwal',   tags: ['Figma', 'Prototyping', 'Design Systems'],  hot: true,  desc: 'Shape the visual identity of our products. You will design intuitive interfaces that delight users and convert visitors.'            },
    { role: 'DevOps Engineer',                type: 'Full-time', location: 'Remote',            tags: ['AWS', 'Docker', 'Kubernetes'],             hot: false, desc: 'Own our cloud infrastructure. Build reliable CI/CD pipelines, monitor systems, and keep everything running at scale.'             },
    { role: 'Digital Marketing Specialist',   type: 'Full-time', location: 'On-site · Butwal',  tags: ['SEO', 'Meta Ads', 'Analytics'],            hot: false, desc: 'Drive growth through data-driven campaigns. Own SEO, paid ads, and analytics to bring qualified leads to our doorstep.'           },
    { role: 'React Native Developer',         type: 'Contract',  location: 'Remote',            tags: ['React Native', 'iOS', 'Android'],          hot: false, desc: 'Build polished cross-platform mobile apps. Work closely with design to ship experiences users love on iOS and Android.'           },
    { role: 'Business Development Executive', type: 'Full-time', location: 'On-site · Butwal',  tags: ['Sales', 'CRM', 'Strategy'],                hot: false, desc: 'Open new markets and build lasting client relationships. You will be the face of Cornor Tech to enterprise decision-makers.'       },
];

const PERKS = [
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, label: 'Competitive Salary', desc: 'Market-rate pay reviewed annually' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>, label: 'Remote Friendly', desc: 'Work from anywhere, anytime' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>, label: 'Learning Budget', desc: 'NPR 30k/yr for courses & books' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, label: 'Health Insurance', desc: 'Full medical coverage for you' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, label: 'Fast Career Growth', desc: 'Clear paths, real promotions' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, label: 'Great Culture', desc: 'Inclusive, async-first team' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>, label: 'Flexible Time Off', desc: 'Take the time you need' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, label: 'Cutting-edge Stack', desc: 'Latest tools, no legacy mess' },
];

const PROCESS = [
    { step: '01', title: 'Apply Online',        desc: 'Submit your CV and a short note on why you want to join Cornor Tech. No cover letter needed.' },
    { step: '02', title: 'Intro Call',           desc: '30-min video call with our team. We talk about your experience, what you are looking for, and answer your questions.' },
    { step: '03', title: 'Technical Round',      desc: 'A practical take-home task or live session relevant to the role. We keep it focused and respectful of your time.' },
    { step: '04', title: 'Final Interview',      desc: 'Meet the leadership team. We discuss culture fit, growth, and make sure this is the right move for both sides.' },
    { step: '05', title: 'Offer & Onboarding',  desc: 'We move fast. Offer within 48 hours of the final round. Full onboarding support from day one.' },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <section className="relative bg-linear-to-br from-[#1e003a] via-[#2d0a52] to-[#3b1266] pt-24 pb-20 px-4 overflow-hidden">

                {/* Back to Home — top-left fixed bar */}
                <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4 flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-colors group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

            {/* Decorative rings */}
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-purple-500/20 pointer-events-none" />
                <div className="absolute top-10 right-10 w-48 h-48 rounded-full border border-purple-400/10 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-purple-500/15 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">

                    <span className="inline-block px-4 py-1.5 bg-[#a3e635]/20 text-[#a3e635] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        We&apos;re Hiring — {OPENINGS.length} open positions
                    </span>

                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                        Build the future<br />
                        <span className="text-[#a855f7]">with Cornor Tech</span>
                    </h1>

                    <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join a team of passionate engineers, designers, and strategists working on products that make a real difference. We move fast, grow together, and celebrate every win.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#openings"
                            className="flex items-center gap-2 px-6 py-3 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#7c3aed] transition-colors shadow-lg shadow-[#9333EA]/30"
                        >
                            See Open Roles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <a
                            href="mailto:careers@cornortech.com"
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            Send Your CV
                        </a>
                    </div>

                    {/* Quick stats */}
                    <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/10">
                        {[
                            { n: '25+', l: 'Team Members' },
                            { n: '3+',  l: 'Years Old' },
                            { n: '150+', l: 'Projects Shipped' },
                            { n: '98%', l: 'Client Retention' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl font-black text-white">{s.n}</p>
                                <p className="text-xs text-white/40 font-medium mt-0.5">{s.l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── End Hero ── */}

            {/* ── Perks ── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]/60 mb-3">Why Cornor Tech</p>
                        <h2 className="text-2xl lg:text-3xl font-black text-gray-900">What we offer</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PERKS.map((perk, i) => (
                            <div key={i} className="flex flex-col gap-3 p-5 bg-[#9333EA]/4 rounded-2xl border border-[#9333EA]/10 hover:border-[#9333EA]/25 transition-all duration-200">
                                <div className="w-11 h-11 bg-[#9333EA]/10 rounded-xl flex items-center justify-center text-[#9333EA]">
                                    {perk.icon}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{perk.label}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{perk.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── End Perks ── */}


            {/* ── Open Positions ── */}
            <section id="openings" className="py-20 px-4 bg-[#faf9ff]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]/60 mb-3">Join the team</p>
                        <h2 className="text-2xl lg:text-3xl font-black text-gray-900">Open Positions</h2>
                        <p className="text-gray-500 text-sm mt-2">{OPENINGS.length} roles available right now</p>
                    </div>

                    <div className="space-y-4">
                        {OPENINGS.map((job, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-2xl border border-gray-100
                                           hover:border-[#9333EA]/25 hover:shadow-md
                                           transition-all duration-200 p-5 lg:p-6"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                                    {/* Left */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 bg-[#9333EA]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#9333EA]/20 transition-colors">
                                            <svg className="w-5 h-5 text-[#9333EA]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                                <h3 className="font-black text-gray-900 text-base group-hover:text-[#9333EA] transition-colors">
                                                    {job.role}
                                                </h3>
                                                {job.hot && (
                                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-wide">
                                                        Hot
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 leading-relaxed mb-3">{job.desc}</p>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                    </svg>
                                                    {job.location}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-gray-200" />
                                                <span className="text-xs text-gray-400">{job.type}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-200" />
                                                <div className="flex flex-wrap gap-1.5">
                                                    {job.tags.map((tag, t) => (
                                                        <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[10px] font-semibold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply button */}
                                    <a
                                        href={`mailto:careers@cornortech.com?subject=Application — ${job.role}`}
                                        className="shrink-0 flex items-center gap-2 px-5 py-2.5
                                                   bg-[#9333EA] text-white rounded-xl text-sm font-semibold
                                                   hover:bg-[#7c3aed] active:scale-95 transition-all
                                                   self-start lg:self-center"
                                    >
                                        Apply Now
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── End Open Positions ── */}


            {/* ── Hiring Process ── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]/60 mb-3">Simple & transparent</p>
                        <h2 className="text-2xl lg:text-3xl font-black text-gray-900">Our Hiring Process</h2>
                        <p className="text-gray-500 text-sm mt-2">From application to offer — usually under 2 weeks</p>
                    </div>

                    <div className="space-y-4">
                        {PROCESS.map((step, i) => (
                            <div key={i} className="flex items-start gap-5 p-5 bg-[#faf9ff] rounded-2xl border border-[#9333EA]/8">
                                <div className="w-12 h-12 bg-linear-to-br from-[#9333EA] to-[#7c3aed] rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-[#9333EA]/25">
                                    <span className="text-white font-black text-sm">{step.step}</span>
                                </div>
                                <div>
                                    <h3 className="font-black text-gray-900 text-base mb-1">{step.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── End Hiring Process ── */}


            {/* ── General Application CTA ── */}
            <section className="py-20 px-4 bg-linear-to-br from-[#1e003a] via-[#2d0a52] to-[#3b1266]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
                        Don&apos;t see your role?
                    </h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        We are always on the lookout for exceptional talent. Send us your CV with a short note about what you do and what kind of role you are looking for. We will keep it on file and reach out when the right position opens.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:careers@cornortech.com"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#9333EA] text-white rounded-xl font-bold hover:bg-[#7c3aed] transition-colors shadow-lg shadow-[#9333EA]/30"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            Send Your CV
                        </a>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                    <p className="text-white/30 text-xs mt-8">careers@cornortech.com · We reply within 24 hours</p>
                </div>
            </section>
            {/* ── End General Application CTA ── */}

        </main>
    );
}