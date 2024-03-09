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
      <div className={styles.SponsorsReviewContainer}>
        {sponsorsReviews.map((review, index) => (
          <SponsorsReviewItem key={index} review={review} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SponsorsReview;
