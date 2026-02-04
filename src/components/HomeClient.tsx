'use client';

import Header from '@/components/Header';
import TopBanner from '@/components/TopBanner'
import Hero from '@/components/Hero';
// import SmartEditor from '@/components/SmartEditor';
import Templates from '@/components/Templates';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { useScrollAnimation, useSmoothScroll, useParallax } from '@/hooks/useAnimations';

export default function Home() {
  useScrollAnimation();
  useSmoothScroll();
  useParallax();

  return (
    <div className="min-h-screen bg-white">
      <TopBanner/>
      <Header />
      <main>
        <Hero />
        {/* <SmartEditor /> */}
        <Templates />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}