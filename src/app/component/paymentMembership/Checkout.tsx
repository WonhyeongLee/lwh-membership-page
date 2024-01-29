import { useRef } from "react";
import MembershipPrice from "../membershipPrice/MembershipPrice"
import SponsorsReview from "../sponsorsReview/SponsorsReview"
import * as styles from './Checkout.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Checkout = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const sponsorsReviewRef = useRef<HTMLDivElement>(null);
  const membershipPriceRef = useRef<HTMLDivElement>(null);

  // Checkout section의 ref를 넘겨서 사용하도록 수정해야함
  useGSAP(() => {
    const checkoutTl = gsap.timeline({
      scrollTrigger: {
        trigger: checkoutRef.current,
        start: "top top",
        end: "bottom top-=200",
        scrub: 1,
        pin: true,
        toggleActions: "play reverse play reverse",
      },
    });

    checkoutTl.from(sponsorsReviewRef.current, {
      yPercent: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.InOut",
    });

    checkoutTl.from(membershipPriceRef.current, {
      yPercent: -20,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
  
  return (
    <section className={styles.CheckoutContainer} ref={checkoutRef}>
        <SponsorsReview />
        <MembershipPrice />
    </section>
  )
}

export default Checkout