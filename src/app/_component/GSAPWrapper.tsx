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
  }, []);

  return <>{children}</>;
};

export default GSAPWrapper;
