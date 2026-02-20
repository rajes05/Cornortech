'use client';

import Header from '@/components/Header';
import TopBanner from '@/components/TopBanner'
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Courses from '@/components/Courses'
import Services from '@/components/Services'
import OurWorks from '@/components/OurWorks'
import AboutUs from '@/components/AboutUs'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import CTA from '@/components/ui/CTA'
import { useScrollAnimation, useSmoothScroll, useParallax } from '@/hooks/useAnimations';
import { useState } from 'react';

export default function Home() {
  useScrollAnimation();
  useSmoothScroll();
  useParallax();

  const [bannerVisible, setBannerVisible] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-white">
      <TopBanner visible={bannerVisible} setVisible={setBannerVisible}/>
      <Header />
      <main>
        <Hero bannerVisible={bannerVisible}/>
        <Services/>
        <ScrollToTopButton/>
        <CTA/>
        <Courses/>
        <OurWorks/>
        <Testimonials />
        <AboutUs/>
      </main>
      <Footer />
    </div>
  );
}