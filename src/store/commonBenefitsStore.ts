import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { CommonBenefit } from '@/model/membershipInformation.ts';

interface CommonBenefitsState {
  commonBenefits: CommonBenefit[];
  setCommonBenefits: (benefits: CommonBenefit[]) => void;
}

export const useCommonBenefitsStore = create<CommonBenefitsState>()(
  devtools(set => ({
    commonBenefits: [],
    setCommonBenefits: commonBenefits => set(() => ({ commonBenefits })),
  })),
);
