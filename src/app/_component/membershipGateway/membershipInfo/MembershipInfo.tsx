'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import Button from '@/app/_component/common/button/Button.tsx';
import MembershipLevelItem from '@/app/_component/membershipGateway/membershipInfo/MembershipLevelItem.tsx';
import { useMembershipGatewayStore } from '@/store/membershipGatewayStore.ts';

import * as styles from './MembershipInfo.css.ts';

const MembershipInfo = () => {
  const membershipInfoContainerRef = useRef<HTMLDivElement>(null);
  const paymentOptions = useMembershipGatewayStore(
    state => state.paymentOptions,
  );
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
      className={styles.MembershipInfoContainer}
      ref={membershipInfoContainerRef}
    >
      <div>
        <h2 className={styles.MembershipInfoHeading}>
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
          {paymentOptions.map(({ title, image, price }) => (
            <MembershipLevelItem
              key={title}
              title={title}
              imageUrl={image || 'https://placehold.co/300x300.png'}
              price={price}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MembershipInfo;
