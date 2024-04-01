'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { useRef } from 'react';

import Carousel from '@/app/_component/common/carousel/Carousel.tsx';
import CommonBenefitItem from '@/app/_component/commonBenefits/CommonBenefitsItem.tsx';
import useMobileScreen from '@/hooks/useMobileScreen.ts';

import * as styles from './CommonBenefits.css';

import type { CommonBenefit } from '@/model/membershipInformation.ts';

interface CommonBenefitsProps {
  commonBenefits: CommonBenefit[];
}

const CommonBenefits: React.FC<CommonBenefitsProps> = ({ commonBenefits }) => {
  const commonBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const commonBenefitsHeadingRef = useRef<HTMLHeadingElement>(null);
  const commonBenefitsItemWrapperRef = useRef<HTMLUListElement>(null);
  const isMobile = useMobileScreen();

  useGSAP(
    () => {
      // CommonBenefits 영역
      const commonBenefitsTl = gsap.timeline({
        scrollTrigger: {
          trigger: commonBenefitsContainerRef.current,
          start: 'top top',
          end: 'bottom top-=200',
          scrub: 1,
          pin: true,
          toggleActions: 'play reverse play reverse',
        },
      });

      commonBenefitsTl.from(commonBenefitsHeadingRef.current, {
        yPercent: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.InOut',
      });

      commonBenefitsTl.fromTo(
        `.${styles.CommonBenefitItem}`,
        { xPercent: -50, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.4,
          ease: 'power2.out',
        },
        '<0.5',
      );
    },
    { scope: commonBenefitsContainerRef },
  );

  return (
    <section
      className={styles.CommonBenefitsContainer}
      ref={commonBenefitsContainerRef}
      id="commonBenefitsContainer"
    >
      <div ref={commonBenefitsHeadingRef}>
        <h2 className={styles.CommonBenefitsHeading}>멤버쉽 혜택</h2>
        <p className={styles.CommonBenefitsComment}>
          후원해주시는 모든 분들께 공통 혜택을 드립니다.
        </p>
      </div>
      {isMobile ? (
        <Carousel itemsToShow={1}>
          {commonBenefits.map(benefit => (
            <CommonBenefitItem
              key={benefit.id}
              benefit={benefit}
              className={styles.CommonBenefitItem}
            />
          ))}
        </Carousel>
      ) : (
        <ul
          className={styles.CommonBenefitsItemWrapper}
          ref={commonBenefitsItemWrapperRef}
        >
          {commonBenefits.map(benefit => (
            <CommonBenefitItem
              key={benefit.id}
              benefit={benefit}
              className={styles.CommonBenefitItem}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommonBenefits;
