import Image from 'next/image';

import * as styles from './SponsorsReview.css';
import { sponsorsReviewData } from '../../../../assets/SponsorsReviewData';
const SponsorsReview = () => {
  return (
    <section className={styles.SponsorsReviewSection}>
      <h2 className={styles.SponsorsReviewHeading}>후원자님들의 후기</h2>
      <div className={styles.SponsorsReviewContainer}>
        {sponsorsReviewData.map((review, index) => (
          <div key={index} className={styles.SponsorsReviewCard}>
            <div className={styles.SponsorsReviewInfo}>
              <div className={styles.SponsorsReviewAuthor}>
                <Image
                  width={25}
                  height={25}
                  src={'https://placehold.co/25.png'}
                  alt={`${review.name}의 프로필 이미지`}
                />
                <span>{review.name}</span>
              </div>
              <div className={styles.SponsorsReviewRating}>
                <span>별</span>
                <strong>{review.rating}</strong>
              </div>
            </div>
            <div className={styles.SponsorsReviewText}>{review.review}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsReview;
