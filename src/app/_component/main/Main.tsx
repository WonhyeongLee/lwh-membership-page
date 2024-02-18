'use client';

import gsap from 'gsap';
import Observer from 'gsap/Observer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

import Checkout from '../checkout/Checkout';
import CommonBenefits from '../commonBenefits/CommonBenefits';
import Introduction from '../introduction/Introduction';
import MembershipBenefits from '../membershipBenefits/MembershipBenefits';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

const Main = () => {
  useLayoutEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    ScrollTrigger.clearScrollMemory('manual');
    window.history.scrollRestoration = 'manual';

    window.scrollTo(0, 0);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <Checkout />
    </>
  );
};

export default Main;
