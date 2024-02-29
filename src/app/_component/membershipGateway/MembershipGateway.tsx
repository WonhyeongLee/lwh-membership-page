import MembershipInfo from '@/app/_component/membershipGateway/membershipInfo/MembershipInfo.tsx';
import SponsorsReview from '@/app/_component/membershipGateway/sponsorsReview/SponsorsReview.tsx';

import * as styles from './MembershipGateway.css.ts';

import type {
  SponsorsReviews,
  PaymentOption,
} from '@/model/membershipInformation.ts';

interface MembershipGatewayProps {
  sponsorsReviews: SponsorsReviews[];
  paymentOptions: PaymentOption[];
}

const MembershipGateway = ({
  sponsorsReviews,
  paymentOptions,
}: MembershipGatewayProps) => {
  return (
    <section className={styles.MembershipGatewayContainer}>
      <SponsorsReview sponsorsReviews={sponsorsReviews} />
      <MembershipInfo paymentOptions={paymentOptions} />
    </section>
  );
};

export default MembershipGateway;
