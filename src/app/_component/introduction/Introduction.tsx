'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import Image from 'next/image';
import { useRef } from 'react';

import * as styles from './Introduction.css';

const Introduction = () => {
  const introContainer = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const firstTextSection = useRef<HTMLDivElement>(null);
  const secTextSection = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollObserver = Observer.create({
        type: 'wheel,touch,scroll',
        preventDefault: true,
      });

      gsap.set(`.${styles.introImageContainer} > :nth-child(2)`, {
        visibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      });

      gsap.from(`.${styles.introImageContainer} > :first-child`, {
        xPercent: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.In',
      });

      gsap.from(`.${styles.introText}`, {
        xPercent: +30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.5,
        ease: 'power2.In',
        onComplete: () => {
          scrollObserver.kill();
        },
      });
    },
    { dependencies: [], scope: introContainer },
  );

  useGSAP(
    () => {
      const introductionTl = gsap.timeline({
        scrollTrigger: {
          trigger: introContainer.current!,
          start: 'top+=10 top',
          end: '+=2000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          toggleActions: 'play reverse play reverse',
        },
      });

      if (firstTextSection.current) {
        introductionTl.to(firstTextSection.current.querySelectorAll('p'), {
          xPercent: 50,
          yPercent: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power2.InOut',
        });
      }

      if (secTextSection.current) {
        introductionTl.to(
          secTextSection.current.querySelectorAll('p'),
          {
            y: '-90vh',
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: 'power2.out',
          },
          '-=0.25',
        );
      }

      introductionTl.to(
        `.${styles.introImageContainer} > :first-child`,
        {
          autoAlpha: 0,
          duration: 1.5,
        },
        0,
      );
      introductionTl.fromTo(
        `.${styles.introImageContainer} > :nth-child(2)`,
        { visibility: 'visible', autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 },
        '<',
      );
    },
    { dependencies: [], scope: introContainer },
  );

  return (
    <section ref={introContainer} className={styles.introContainer} id="intro">
      <div className={styles.introImageContainer} ref={imageContainerRef}>
        <Image
          className={styles.profileImage}
          src={`/images/profile.jpg`}
          alt="프로필"
          fill={true}
        />
        <Image
          className={styles.profileImage}
          src={`/images/profile2.jpg`}
          alt="프로필"
          fill={true}
        />
      </div>
      <div id="box" className={styles.introTextContainer}>
        <div className={styles.introTextBox} ref={firstTextSection}>
          <p className={styles.introText}>안녕하세요</p>
          <p className={styles.introText}>가난한 백수</p>
          <p className={styles.introText}>이원형입니다</p>
        </div>
        <div className={styles.introTextBox} ref={secTextSection}>
          <p className={styles.introText}>멤버쉽을</p>
          <p className={styles.introText}>소개합니다</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
