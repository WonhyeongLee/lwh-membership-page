'use client';
import Carousel from '@/app/_component/common/carousel/Carousel.tsx';
import SponsorsReviewItem from '@/app/_component/membershipGateway/sponsorsReview/SponsorsReviewItem.tsx';
import { useMembershipGatewayStore } from '@/store/index.ts';

import * as styles from './SponsorsReview.css';

const SponsorsReview = () => {
  const sponsorsReviews = useMembershipGatewayStore(
    state => state.sponsorsReviews,
  );
  return (
    <section className={styles.SponsorsReviewSection}>
      <h2 className={styles.SponsorsReviewHeading}>후원자님들의 후기</h2>
      <Carousel itemsToShow={2}>
        {sponsorsReviews.map(review => (
          <SponsorsReviewItem key={review.id} review={review} />
        ))}
      </Carousel>
    </section>
  );
};

export default SponsorsReview;
