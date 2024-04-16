'use client';
import { useQuery } from '@tanstack/react-query';

import Carousel from '@/app/_component/common/carousel/Carousel.tsx';
import SponsorsReviewItem from '@/app/_component/membershipGateway/sponsorsReview/SponsorsReviewItem.tsx';
import { getSponsorsReview } from '@/app/_lib/getSponsorsReview.ts';

import * as styles from './SponsorsReview.css';

const SponsorsReview = () => {
  const { data } = useQuery({
    queryKey: ['sponsors-reviews'],
    queryFn: getSponsorsReview,
  });
  return (
    <section className={styles.SponsorsReviewSection}>
      <h2 className={styles.SponsorsReviewHeading}>후원자님들의 후기</h2>
      <Carousel itemsToShow={2}>
        {
          data?.map(review => (
            <SponsorsReviewItem key={review.id} review={review} />
          )) as JSX.Element[]
        }
      </Carousel>
    </section>
  );
};

export default SponsorsReview;
