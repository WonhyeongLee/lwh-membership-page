'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

import BenefitsList from '@/app/_component/membershipBenefits/BenefitsList.tsx';
import SelectedBenefitsDetail from '@/app/_component/membershipBenefits/SelectedBenefitsDetail.tsx';

import * as styles from './MembershipBenefits.css';

import type { MembershipBenefit } from '@/model/membershipInformation.ts';

interface MembershipBenefitProps {
  membershipBenefits: MembershipBenefit[];
}

const MembershipBenefits: React.FC<MembershipBenefitProps> = ({
  membershipBenefits,
}) => {
  const membershipBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const defaultTitle = membershipBenefits[0].title;
  const [selectedTitle, setSelectedTitle] = useState(defaultTitle);

  const handleSelectTitle = (title: string): void => {
    if (!isAnimatingRef.current) {
      setSelectedTitle(title);
    }
  };

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
        membershipBenefits={membershipBenefits}
        selectedTitle={selectedTitle}
        className={styles.SelectedBenefitsDetailWrapper}
      />
      <BenefitsList
        membershipBenefits={membershipBenefits}
        handleSelectTitle={handleSelectTitle}
        className={styles.BenefitsListWrapper}
      />
    </section>
  );
};

export default MembershipBenefits;
