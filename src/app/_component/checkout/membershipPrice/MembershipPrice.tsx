'use client';
import Image from 'next/image';
import { useRef } from 'react';

import * as styles from './MembershipPrice.css';
import { paymentData } from '../../../../assets/PaymentData';

const MembershipPrice = () => {
  const membershipPriceContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={styles.MembershipPriceContainer}
      ref={membershipPriceContainerRef}
    >
      <h2 className={styles.MembershipPriceHeading}>멤버쉽 가격 및 후원하기</h2>
      <ul className={styles.MembershipLevelList}>
        {paymentData.map(membershipLevel => (
          <li
            key={membershipLevel.title}
            className={styles.MembershipLevelItem}
          >
            <strong>{membershipLevel.title}</strong>
            <div className={styles.MembershipImageWrapper}>
              <Image
                src="https://placehold.co/400x400.png"
                alt="Placeholder Image"
                width={400}
                height={400}
              />
            </div>
            <div>{membershipLevel.가격.toLocaleString()}원</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MembershipPrice;
