import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type {
  PaymentOption,
  SponsorsReviews,
} from '@/model/membershipInformation.ts';

interface MembershipGatewayState {
  paymentOptions: PaymentOption[];
  sponsorsReviews: SponsorsReviews[];
  setPaymentOptions: (paymentOptions: PaymentOption[]) => void;
  setSponsorsReviews: (sponsorsReviews: SponsorsReviews[]) => void;
}

export const useMembershipGatewayStore = create<MembershipGatewayState>()(
  devtools(set => ({
    paymentOptions: [],
    sponsorsReviews: [],
    setPaymentOptions: paymentOptions => set({ paymentOptions }),
    setSponsorsReviews: sponsorsReviews => set({ sponsorsReviews }),
  })),
);
