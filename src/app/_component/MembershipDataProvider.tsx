'use client';

import { useEffect } from 'react';

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

export default function MembershipDataProvider({
  commonBenefits,
  membershipBenefits,
  paymentOptions,
  sponsorsReviews,
  children,
}: MembershipDataProviderProps) {
  const setCommonBenefits = useCommonBenefitsStore(
    state => state.setCommonBenefits,
  );
  const setMembershipBenefits = useMembershipBenefitsStore(
    state => state.setMembershipBenefits,
  );
  const { setPaymentOptions, setSponsorsReviews } = useMembershipGatewayStore();

  useEffect(() => {
    setCommonBenefits(commonBenefits);
    setMembershipBenefits(membershipBenefits);
    setPaymentOptions(paymentOptions);
    setSponsorsReviews(sponsorsReviews);
  }, [
    commonBenefits,
    membershipBenefits,
    paymentOptions,
    sponsorsReviews,
    setCommonBenefits,
    setMembershipBenefits,
    setPaymentOptions,
    setSponsorsReviews,
  ]);

  return children;
}
