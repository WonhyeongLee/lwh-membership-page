import MembershipInfo from '@/app/_component/membershipGateway/membershipInfo/MembershipInfo.tsx';
import SponsorsReview from '@/app/_component/membershipGateway/sponsorsReview/SponsorsReview.tsx';

import * as styles from './MembershipGateway.css.ts';

const MembershipGateway = () => {
  return (
    <section className={styles.MembershipGatewayContainer}>
      <SponsorsReview />
      <MembershipInfo />
    </section>
  );
};

export default MembershipGateway;
