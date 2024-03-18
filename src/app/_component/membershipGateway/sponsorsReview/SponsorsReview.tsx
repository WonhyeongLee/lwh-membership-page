import Carousel from '@/app/_component/common/carousel/Carousel.tsx';
import SponsorsReviewItem from '@/app/_component/membershipGateway/sponsorsReview/SponsorsReviewItem.tsx';

import * as styles from './SponsorsReview.css';

import type { SponsorsReviews } from '@/model/membershipInformation.ts';
interface SponsorsReviewProps {
  sponsorsReviews: SponsorsReviews[];
}

const SponsorsReview = ({ sponsorsReviews }: SponsorsReviewProps) => {
  return (
    <section className={styles.SponsorsReviewSection}>
      <h2 className={styles.SponsorsReviewHeading}>후원자님들의 후기</h2>
      <Carousel itemsToShow={2}>
        {sponsorsReviews.map((review, index) => (
          <SponsorsReviewItem key={index} review={review} index={index} />
        ))}
      </Carousel>
    </section>
  );
};

export default SponsorsReview;
