'use client';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

const GSAPWrapper = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });
    ScrollTrigger.clearScrollMemory('manual');
    window.history.scrollRestoration = 'manual';

    window.scrollTo(0, 0);

    const setVHVariable = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVHVariable();
    window.addEventListener('resize', setVHVariable);
    return () => window.removeEventListener('resize', setVHVariable);
  }, []);

  return <>{children}</>;
};

export default GSAPWrapper;
