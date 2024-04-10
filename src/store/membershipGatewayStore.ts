import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type {
  PaymentOption,
  SponsorsReviews,
} from '@/model/membershipInformation.ts';

type MembershipGatewayState = {
  paymentOptions: PaymentOption[];
  sponsorsReviews: SponsorsReviews[];
};

type MembershipGatewayActions = {
  setPaymentOptions: (paymentOptions: PaymentOption[]) => void;
  setSponsorsReviews: (sponsorsReviews: SponsorsReviews[]) => void;
};

export const useMembershipGatewayStore = create<
  MembershipGatewayState & MembershipGatewayActions
>()(
  devtools(set => ({
    paymentOptions: [],
    sponsorsReviews: [],
    setPaymentOptions: paymentOptions => set({ paymentOptions }),
    setSponsorsReviews: sponsorsReviews => set({ sponsorsReviews }),
  })),
);
