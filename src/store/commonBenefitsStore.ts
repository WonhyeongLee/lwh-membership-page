import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { CommonBenefit } from '@/model/membershipInformation.ts';

type CommonBenefitsState = {
  commonBenefits: CommonBenefit[];
};

type CommonBenefitsActions = {
  setCommonBenefits: (benefits: CommonBenefit[]) => void;
};

export const useCommonBenefitsStore = create<
  CommonBenefitsState & CommonBenefitsActions
>()(
  devtools(set => ({
    commonBenefits: [],
    setCommonBenefits: commonBenefits => set(() => ({ commonBenefits })),
  })),
);
