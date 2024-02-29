'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import Button from '@/app/_component/common/button/Button.tsx';

import * as styles from './MembershipInfo.css.ts';
import { paymentData } from '../../../../assets/PaymentData';

const MembershipPrice = () => {
  const membershipPriceContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: overlayRef });

  const handleSupportWithoutJoining = contextSafe(() => {
    gsap.to(overlayRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = 'none';
        }
      },
    });
  });

  return (
    <section
      className={styles.MembershipPriceContainer}
      ref={membershipPriceContainerRef}
    >
      <div>
        <h2 className={styles.MembershipPriceHeading}>
          멤버쉽 사이트로 이동 후 후원하기
        </h2>
        <p className={styles.Text}>혜택 사용을 위해 가입 후 후원해주세요 !!</p>
      </div>
      <div className={styles.OverlayContainer}>
        <div ref={overlayRef}>
          <div className={styles.Overlay}></div>
          <div className={styles.LinkButtons}>
            <Button onClick={handleSupportWithoutJoining}>
              가입안하고 후원하기
            </Button>
            <Button href="#">멤버쉽 페이지로 이동</Button>
          </div>
        </div>
        <ul className={styles.MembershipLevelList}>
          {paymentData.map(membershipLevel => (
            <li
              key={membershipLevel.title}
              className={styles.MembershipLevelItem}
            >
              <strong>{membershipLevel.title}</strong>
              <div className={styles.MembershipImageWrapper}>
                <Image
                  src="https://placehold.co/300x300.png"
                  alt="Placeholder Image"
                  width={300}
                  height={300}
                />
              </div>
              <div>{membershipLevel.가격.toLocaleString()}원</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MembershipPrice;
