import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { MembershipBenefit } from '@/model/membershipInformation.ts';

type MembershipBenefitsState = {
  membershipBenefits: MembershipBenefit[];
  selectedTitle: string;
  isAnimating: boolean;
};

type MembershipBenefitsActions = {
  setMembershipBenefits: (membershipBenefits: MembershipBenefit[]) => void;
  setSelectedTitle: (title: string) => void;
  toggleAnimation: () => void;
};

export const useMembershipBenefitsStore = create<
  MembershipBenefitsState & MembershipBenefitsActions
>()(
  devtools(
    set => ({
      membershipBenefits: [],
      selectedTitle: '',
      isAnimating: false,
      setMembershipBenefits: (membershipBenefits: MembershipBenefit[]) =>
        set(state => {
          const defaultTitle =
            membershipBenefits.length > 0 ? membershipBenefits[0].title : '';
          return {
            membershipBenefits,
            selectedTitle: defaultTitle || state.selectedTitle,
          };
        }),
      setSelectedTitle: title =>
        set(state => {
          if (!state.isAnimating) {
            return { selectedTitle: title };
          }
          return {};
        }),
      toggleAnimation: () =>
        set(state => ({ isAnimating: !state.isAnimating })),
    }),
    { name: 'MembershipBenefitsStore' },
  ),
);
