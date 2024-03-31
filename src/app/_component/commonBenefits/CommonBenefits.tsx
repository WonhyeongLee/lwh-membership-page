'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';

import * as styles from './CommonBenefits.css';

import type { CommonBenefit } from '@/model/membershipInformation.ts';

interface CommonBenefitsProps {
  commonBenefits: CommonBenefit[];
}

const CommonBenefits: React.FC<CommonBenefitsProps> = ({ commonBenefits }) => {
  const commonBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const commonBenefitsHeadingRef = useRef<HTMLHeadingElement>(null);
  const commonBenefitsItemWrapperRef = useRef<HTMLUListElement>(null);
  const commonBenefitsItemListRefs = useRef<
    Array<React.RefObject<HTMLLIElement>>
  >(commonBenefits.map(() => React.createRef<HTMLLIElement>()));

  useGSAP(() => {
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

    commonBenefitsItemListRefs.current.forEach(ref => {
      commonBenefitsTl.fromTo(
        ref.current,
        { xPercent: -50, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
        '<0.5',
      );
    });
  });

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
      <ul
        className={styles.CommonBenefitsItemWrapper}
        ref={commonBenefitsItemWrapperRef}
      >
        {commonBenefits.map((benefit, index) => (
          <li
            key={benefit.id}
            className={styles.CommonBenefitItem}
            ref={commonBenefitsItemListRefs.current[index]}
          >
            <Image
              className={styles.CommonBenefitImage}
              width={338}
              height={259}
              src={benefit.image || 'https://placehold.co/338x259.png'}
              alt={`${benefit.title} 이미지`}
            />
            <div className={styles.CommonBenefitContent}>
              <p className={styles.CommonBenefitTitle}>{benefit.title}</p>
              <p className={styles.CommonBenefitDescription}>
                {benefit.benefit}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommonBenefits;
