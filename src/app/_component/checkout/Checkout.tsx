'use client';
import { useRef } from 'react';

import MembershipPrice from '@/app/_component/checkout/membershipPrice/MembershipPrice.tsx';
import SponsorsReview from '@/app/_component/checkout/sponsorsReview/SponsorsReview.tsx';

import * as styles from './Checkout.css.ts';

const Checkout = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.CheckoutContainer} ref={checkoutRef}>
      <SponsorsReview />
      <MembershipPrice />
    </section>
  );
};

export default Checkout;
