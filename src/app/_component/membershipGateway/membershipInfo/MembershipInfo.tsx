'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import * as styles from './MembershipInfo.css.ts';
import { paymentData } from '../../../../assets/PaymentData';

const MembershipPrice = () => {
  const membershipPriceContainerRef = useRef<HTMLDivElement>(null);

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
        <div className={styles.Overlay}></div>
        <div className={styles.LinkButtons}>
          <Link href="#" className={styles.Link}>
            익명으로 후원하기
          </Link>
          <Link href="#" className={styles.Link}>
            멤버쉽 페이지로 이동
          </Link>
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
                  objectFit="cover"
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
