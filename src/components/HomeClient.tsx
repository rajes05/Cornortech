'use client';

import Header from '@/components/Header';
import TopBanner from '@/components/TopBanner'
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Courses from '@/components/Courses'
import Services from '@/components/Services'
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
        <Services/>
        <Courses/>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}