import MembershipPrice from '@/app/_component/checkout/membershipPrice/MembershipPrice.tsx';
import SponsorsReview from '@/app/_component/checkout/sponsorsReview/SponsorsReview.tsx';

import * as styles from './Checkout.css.ts';

import type { SponsorsReviews } from '@/model/membershipInformation.ts'; // 가정한 타입 경로

interface CheckoutProps {
  sponsorsReviews: SponsorsReviews[];
}

const Checkout = ({ sponsorsReviews }: CheckoutProps) => {
  return (
    <section className={styles.CheckoutContainer}>
      <SponsorsReview sponsorsReviews={sponsorsReviews} />
      <MembershipPrice />
    </section>
  );
};

export default Checkout;
