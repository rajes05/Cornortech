"use client";

import { useState, useRef } from "react";

interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  year: string;
  type: string;
  shortInfo: string;
  tags: string[];
  link: string;
  tabBg: string;
  accentColor: string;
  imgBg: string;
  icon: React.ReactNode;
}

const Ico = ({ d }: { d: string }) => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.8}
    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
    dangerouslySetInnerHTML={{ __html: d }} />
);

const ALL_PROJECTS: Project[] = [
  { id:"p1", index:"01", title:"Enterprise E-Commerce Platform",    client:"Retail Solutions Ltd",     year:"2024", type:"Web Development",     shortInfo:"Headless e-commerce with real-time inventory sync, multi-currency checkout, and performance-optimized storefront.",         tags:["Next.js","Node.js","Stripe","Redis","PostgreSQL"],        link:"https://example.com/1", tabBg:"#F5F0FF", accentColor:"#9333EA", imgBg:"from-purple-100 to-violet-200",   icon:<Ico d='<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>' /> },
  { id:"p2", index:"02", title:"AI-Powered Analytics Dashboard",    client:"DataTech Corp",             year:"2024", type:"AI & Machine Learning", shortInfo:"ML-driven BI platform with natural language queries, anomaly detection, and predictive forecasting across 12 data sources.", tags:["Python","TensorFlow","FastAPI","React","D3.js"],           link:"https://example.com/2", tabBg:"#EDEAFF", accentColor:"#7c3aed", imgBg:"from-violet-100 to-indigo-200",  icon:<Ico d='<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>' /> },
  { id:"p3", index:"03", title:"Mobile Banking Application",        client:"FinanceFirst Bank",         year:"2023", type:"Mobile Development",    shortInfo:"Biometric-secured banking app with Open Banking transfers, robo-advisor investments, and offline-capable architecture.",     tags:["React Native","Node.js","Plaid API","Firebase"],          link:"https://example.com/3", tabBg:"#E8FFF6", accentColor:"#059669", imgBg:"from-emerald-100 to-teal-200",  icon:<Ico d='<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>' /> },
  { id:"p4", index:"04", title:"AWS Cloud Migration",               client:"Enterprise Systems Corp",   year:"2023", type:"Cloud & DevOps",         shortInfo:"Full AWS migration with multi-region failover, Kubernetes orchestration, CI/CD pipelines, and zero-downtime cutover.",      tags:["AWS","Terraform","Kubernetes","Docker","Grafana"],        link:"https://example.com/4", tabBg:"#E8F4FF", accentColor:"#0ea5e9", imgBg:"from-sky-100 to-blue-200",      icon:<Ico d='<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>' /> },
  { id:"p5", index:"05", title:"Healthcare Patient Portal",         client:"HealthCare Plus Network",   year:"2024", type:"Web Development",        shortInfo:"HIPAA-compliant portal with smart scheduling, WebRTC telemedicine, EHR integration, and automated prescription management.", tags:["Vue.js","Laravel","WebRTC","MySQL","AWS HIPAA"],           link:"https://example.com/5", tabBg:"#FFF0FA", accentColor:"#db2777", imgBg:"from-pink-100 to-rose-200",     icon:<Ico d='<path d="M9 12h6M12 9v6"/><circle cx="12" cy="12" r="10"/>' /> },
  { id:"p6", index:"06", title:"Restaurant Chain POS System",       client:"Culinary Delights Group",   year:"2023", type:"Software Development",   shortInfo:"Real-time POS with kitchen display, auto-reorder inventory, franchise analytics, and offline-first mobile ordering.",       tags:["React","Express","MySQL","Socket.io","PWA"],              link:"https://example.com/6", tabBg:"#FFF8E8", accentColor:"#d97706", imgBg:"from-amber-100 to-orange-200",  icon:<Ico d='<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>' /> },
  { id:"p7", index:"07", title:"Learning Management System",        client:"EduTech Academy",           year:"2024", type:"Web Development",        shortInfo:"Custom LMS with adaptive learning paths, live streaming, interactive assessments, certificate generation, and creator marketplace.", tags:["Next.js","Node.js","PostgreSQL","AWS","Stripe"],          link:"https://example.com/7", tabBg:"#F0EEFF", accentColor:"#6366f1", imgBg:"from-indigo-100 to-purple-200", icon:<Ico d='<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>' /> },
  { id:"p8", index:"08", title:"Digital Marketing Campaign",        client:"Global Brands Inc",         year:"2024", type:"Digital Marketing",      shortInfo:"Multi-channel campaign with programmatic SEO, influencer partnerships, 400+ creative variants tested, and full marketing automation.", tags:["Google Ads","Meta Ads","HubSpot","SEMrush"],              link:"https://example.com/8", tabBg:"#FFF0FA", accentColor:"#ec4899", imgBg:"from-pink-100 to-fuchsia-200",  icon:<Ico d='<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' /> },
  { id:"p9", index:"09", title:"Brand Identity & Design System",    client:"NovaTech Startup",          year:"2024", type:"Brand & Design",          shortInfo:"Full brand system: logo suite, design tokens, 200+ Figma components, motion guidelines, and a public-facing brand portal.",    tags:["Figma","Storybook","Tailwind","Motion Design","React"],   link:"https://example.com/9", tabBg:"#FFF8E8", accentColor:"#f59e0b", imgBg:"from-yellow-100 to-amber-200",  icon:<Ico d='<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' /> },
];

const INITIAL = 4;
const STEP    = 2;

const OurWorks = () => {
  const [visible,   setVisible]   = useState(INITIAL);
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab,   setPrevTab]   = useState(-1);
  const controlsRef               = useRef<HTMLDivElement>(null);

  const shown    = ALL_PROJECTS.slice(0, visible);
  const total    = ALL_PROJECTS.length;
  const allShown = visible >= total;
  const chunks   = Math.ceil(total / STEP);
  const filled   = Math.ceil(visible / STEP);

  const openTab = (i: number) => { setPrevTab(activeTab); setActiveTab(i); };
  const showMore = () => setVisible(v => Math.min(v + STEP, total));
  const collapse = () => {
    const next = Math.max(visible - STEP, INITIAL);
    setVisible(next);
    if (activeTab >= next) setActiveTab(next - 1);
    setTimeout(() => controlsRef.current?.scrollIntoView({ behavior:"smooth", block:"center" }), 50);
  };

  const bodyAnim = (i: number) => {
    if (i !== activeTab || prevTab < 0 || prevTab === activeTab) return "";
    return activeTab > prevTab ? "anim-from-below" : "anim-from-above";
  };

  return (
    <section id="our-works" className="py-20 bg-white relative overflow-hidden">
      <style>{`
        @keyframes fromBelow { from{opacity:0;transform:translateY(48px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes fromAbove { from{opacity:0;transform:translateY(-48px)} to{opacity:1;transform:translateY(0)} }
        @keyframes waveFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .anim-from-below { animation: fromBelow 1.3s cubic-bezier(0.16,1,0.3,1) both; }
        .anim-from-above { animation: fromAbove 1.3s cubic-bezier(0.16,1,0.3,1) both; }

        /* ── CapCut-exact tab row: transparent bg, only border-bottom divider ── */
        .ow-tab-item {
          background: transparent;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .ow-tab-item:first-child { border-top: 1px solid rgba(0,0,0,0.08); }

        /* Active body gets the pastel bg */
        .ow-tab-body {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        /* Image hover overlay */
        .proj-img-wrap .demo-overlay {
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .proj-img-wrap:hover .demo-overlay {
          opacity: 1;
        }

        /* Wave animation */
        .bottom-wave { animation: waveFloat 4s ease-in-out infinite; transform-origin: center bottom; }
      `}</style>

      {/* ── Header ── */}
      <div className="text-center space-y-4 px-8 mb-14">
        <span className="px-4 py-2 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-sm font-semibold inline-block">
          Our Portfolio
        </span>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
          <span className="text-[#9333EA]">Our Works</span>
          <br />
          Projects That Make an Impact
        </h2>
        <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
          Discover how we&apos;ve helped businesses transform their digital presence with innovative solutions.
        </p>
      </div>
      {/* ── End Header ── */}

      {/* ── Accordion Tab list — CapCut exact style ── */}
      <div className="max-w-6xl mx-auto px-8">
        <ul className="list-none p-0 m-0">
          {shown.map((p, i) => {
            const isOpen = i === activeTab;
            return (
              <li key={p.id} className="ow-tab-item">

                {/* ── Trigger row: hidden when open, visible for all others ── */}
                {!isOpen && <button
                  onClick={() => openTab(i)}
                  className="w-full flex items-center gap-5 px-0 py-5.5 bg-transparent border-none cursor-pointer text-left group">

                  {/* Index number */}
                  <span className="text-xs font-black tabular-nums min-w-8 text-foreground-secondary">
                    {p.index}
                  </span>

                  {/* Title */}
                  <span className="flex-1 text-[17px] font-bold text-[#555555] leading-snug">
                    {p.title}
                  </span>

                  {/* Type · Year — right side */}
                  <span className="hidden sm:block text-xs font-medium text-[#BBBBBB] mr-2">
                    {p.type} · {p.year}
                  </span>

                  {/* Chevron */}
                  <svg
                    className="w-4 h-4 shrink-0"
                    style={{ color: "#CCCCCC" }}
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>

                </button>}
                {/* ── Trigger row: hidden when open, visible for all others ── */}

                {/* ── Expanded body — pastel bg, compact 2-col layout ── */}
                {isOpen && (
                  <div
                    className={`ow-tab-body ${bodyAnim(i)} flex flex-col lg:flex-row gap-0 pb-6 rounded-xl overflow-hidden`}
                    style={{ background: p.tabBg }}>

                    {/* ===== LEFT: 2/3 — compact project info ===== */}
                    <div className="flex-[0_0_65%] px-6 pt-5 pb-5 flex flex-col gap-3 border-r border-black/[0.07]">

                      {/* Type badge */}
                      <span
                        className="self-start px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                        style={{ background: `${p.accentColor}18`, color: p.accentColor }}>
                        {p.type}
                      </span>

                      {/* Project name */}
                      <h3 className="text-base font-black text-gray-900 leading-snug">{p.title}</h3>

                      {/* Client */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground-secondary">Client</span>
                        <span className="text-xs font-semibold text-gray-700">{p.client}</span>
                        <span className="text-gray-300 text-xs">·</span>
                        <span className="text-xs text-foreground-secondary">{p.year}</span>
                      </div>

                      {/* Short info */}
                      <p className="text-sm text-foreground-secondary leading-relaxed">{p.shortInfo}</p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tags.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-black/5 text-foreground-secondary text-[11px] font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                    {/* ===== End LEFT: 2/3 — compact project info ===== */}

                    {/* ===== RIGHT: 1/3 — image with hover demo button ===== */}
                    <div className="flex-1 px-5 py-5 flex items-center justify-center">
                      <div className={`proj-img-wrap w-full aspect-4/3 rounded-xl bg-linear-to-br ${p.imgBg} relative overflow-hidden cursor-pointer`}>

                        {/* Image placeholder — replace with <img> */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                            style={{ background: `linear-gradient(135deg,${p.accentColor},${p.accentColor}cc)` }}>
                            {p.icon}
                          </div>
                          <span
                            className="text-[10px] font-bold opacity-40 text-center leading-relaxed"
                            style={{ color: p.accentColor }}>
                            Project Screenshot
                          </span>
                        </div>
                        {/* End Image placeholder — replace with <img> */}

                        {/* Watermark */}
                        <span
                          className="absolute bottom-2 right-3 text-5xl font-black leading-none select-none pointer-events-none"
                          style={{ color: `${p.accentColor}12` }}>
                          {p.index}
                        </span>

                        {/* ── Hover overlay: semi-transparent demo button ── */}
                        <div className="demo-overlay absolute inset-0 flex items-center justify-center"
                          style={{ background: "rgba(0,0,0,0.18)" }}>
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white backdrop-blur-sm border border-white/40 transition-all hover:scale-105"
                            style={{ background: "rgba(255,255,255,0.18)" }}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Live Demo
                          </a>
                        </div>
                        {/* ── End Hover overlay: semi-transparent demo button ── */}

                      </div>
                    </div>
                     {/* ===== End RIGHT: 1/3 — image with hover demo button ===== */}

                  </div>
                )}
                {/* ── End Expanded body — pastel bg, compact 2-col layout ── */}
                
              </li>
            );
          })}
        </ul>
      </div>
      {/* ── Accordion Tab list — CapCut exact style ── */}

      {/* ── Show More / Collapse Controls ── */}
      <div ref={controlsRef} className="max-w-6xl mx-auto px-8 mt-8 flex flex-col items-center gap-3">
        <p className="text-sm text-foreground-secondary font-medium">
          Showing <span className="text-[#9333EA] font-semibold">{Math.min(visible, total)}</span> of{" "}
          <span className="text-[#9333EA] font-semibold">{total}</span> projects
        </p>
        <div className="flex items-center gap-2">
          {Array.from({ length: chunks }).map((_, i) => (
            <div key={i} className={`rounded-full transition-all duration-300 ${i < filled ? "w-6 h-2 bg-[#9333EA]" : "w-2 h-2 bg-[#9333EA]/20"}`} />
          ))}
        </div>

        {/* == Show More And Collapse Button == */}
        <div className="flex items-center gap-3">
          {!allShown && (
            <button onClick={showMore}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#9333EA] text-white rounded-xl font-semibold text-sm hover:bg-[#7c3aed] active:scale-95 transition-all shadow-md">
              Show More Projects
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
          {visible > INITIAL && (
            <button onClick={collapse}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-[#9333EA] border-2 border-[#9333EA]/30 rounded-xl font-semibold text-sm hover:border-[#9333EA] hover:bg-[#9333EA]/5 active:scale-95 transition-all">
              <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              Collapse
            </button>
          )}
        </div>
        {/* == End Show More And Collapse Button == */}

        {allShown && <p className="text-xs text-foreground-secondary italic">You&apos;ve seen all our projects! 🎉</p>}
      </div>
      {/* ── End Show More / Collapse Controls ── */}

      {/* ── CTA Section ── */}
      <div className="pt-12 px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center sm:text-left">
            Have a Project in Mind?
          </h3>
          <button className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-[#9333EA]/25 whitespace-nowrap">
            Start a Project
          </button>
        </div>
      </div>
      {/* ── End CTA Section ── */}


      {/* ── Bottom Wave — fixed with pb-16 buffer and animated ── */}
      <div className="relative mt-12 h-12">
        <svg
          className="bottom-wave absolute bottom-0 left-0 w-full h-12"
          style={{ fill: "#f3f4f6" }}
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0,48 C320,48 320,0 640,0 C960,0 960,48 1280,48 L1440,48 L1440,0 L1280,0 C960,0 960,48 640,48 C320,48 320,0 0,0 L0,48 Z" />
        </svg>
      </div>
      {/* ── End Bottom Wave — fixed with pb-16 buffer and animated ── */}

    </section>
  );
};

export default OurWorks;