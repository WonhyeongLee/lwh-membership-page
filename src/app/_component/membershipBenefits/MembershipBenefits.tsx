'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import BenefitsList from '@/app/_component/membershipBenefits/BenefitsList.tsx';
import SelectedBenefitsDetail from '@/app/_component/membershipBenefits/SelectedBenefitsDetail.tsx';

import * as styles from './MembershipBenefits.css';

const MembershipBenefits = () => {
  const membershipBenefitsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const membershipBenefitsTl = gsap.timeline({
      scrollTrigger: {
        trigger: membershipBenefitsContainerRef.current,
        start: 'top top',
        end: 'bottom top-=200',
        pin: true,
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    membershipBenefitsTl.from(membershipBenefitsContainerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.InOut',
    });

    membershipBenefitsTl.from(`.${styles.BenefitsListWrapper}`, {
      xPercent: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.InOut',
    });

    membershipBenefitsTl.from(`.${styles.SelectedBenefitsDetailWrapper}`, {
      xPercent: -50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.InOut',
    });
  });

  return (
    <section
      ref={membershipBenefitsContainerRef}
      className={styles.MembershipBenefitsContainer}
    >
      <SelectedBenefitsDetail
        className={styles.SelectedBenefitsDetailWrapper}
      />
      <BenefitsList className={styles.BenefitsListWrapper} />
    </section>
  );
};

export default MembershipBenefits;
