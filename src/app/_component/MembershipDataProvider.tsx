'use client';

import {
  useCommonBenefitsStore,
  useMembershipBenefitsStore,
  useMembershipGatewayStore,
} from '@/store';

import type {
  CommonBenefit,
  MembershipBenefit,
  PaymentOption,
  SponsorsReviews,
} from '@/model/membershipInformation.ts';
interface MembershipDataProviderProps {
  commonBenefits: CommonBenefit[];
  membershipBenefits: MembershipBenefit[];
  paymentOptions: PaymentOption[];
  sponsorsReviews: SponsorsReviews[];
  children: React.ReactNode;
}
const MembershipDataProvider: React.FC<MembershipDataProviderProps> = ({
  commonBenefits,
  membershipBenefits,
  paymentOptions,
  sponsorsReviews,
  children,
}) => {
  const setCommonBenefits = useCommonBenefitsStore(
    state => state.setCommonBenefits,
  );
  const setMembershipBenefits = useMembershipBenefitsStore(
    state => state.setMembershipBenefits,
  );
  const { setPaymentOptions, setSponsorsReviews } = useMembershipGatewayStore();

  setCommonBenefits(commonBenefits);
  setMembershipBenefits(membershipBenefits);
  setPaymentOptions(paymentOptions);
  setSponsorsReviews(sponsorsReviews);

  return children;
};

export default MembershipDataProvider;
