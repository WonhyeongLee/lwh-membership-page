import Image from 'next/image';
import React from 'react';

import Rating from '@/app/_component/common/Rating.tsx';

import * as styles from './SponsorsReview.css.ts';

interface SponsorsReviewItemProps {
  review: {
    name: string;
    rating: number;
    review: string;
  };
  index: number;
}

const SponsorsReviewItem: React.FC<SponsorsReviewItemProps> = ({
  review,
  index,
}) => {
  return (
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
          <Rating rating={review.rating} />
        </div>
      </div>
      <div className={styles.SponsorsReviewText}>{review.review}</div>
    </div>
  );
};

export default SponsorsReviewItem;
