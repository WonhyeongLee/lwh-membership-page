'use client';

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Observer from "gsap/Observer";
import Introduction from "../introduction/Introduction";
import CommonBenefits from "../commonBenefits/CommonBenefits";
import MembershipBenefits from "../membershipBenefits/MembershipBenefits";
import Checkout from "../checkout/Checkout";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});

ScrollTrigger.clearScrollMemory("manual");
window.history.scrollRestoration = "manual";

const Main = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <Checkout />
    </>
  )
}

export default Main