import MembershipPrice from '@/app/_component/membershipGateway/membershipInfo/MembershipInfo.tsx';
import SponsorsReview from '@/app/_component/membershipGateway/sponsorsReview/SponsorsReview.tsx';

import * as styles from './MembershipGateway.css.ts';

import type { SponsorsReviews } from '@/model/membershipInformation.ts'; // 가정한 타입 경로

interface MembershipGatewayProps {
  sponsorsReviews: SponsorsReviews[];
}

const MembershipGateway = ({ sponsorsReviews }: MembershipGatewayProps) => {
  return (
    <section className={styles.MembershipGatewayContainer}>
      <SponsorsReview sponsorsReviews={sponsorsReviews} />
      <MembershipPrice />
    </section>
  );
};

export default MembershipGateway;
