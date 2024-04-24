import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type MembershipBenefitsState = {
  selectedTitle: string;
  isAnimating: boolean;
};

type MembershipBenefitsActions = {
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
