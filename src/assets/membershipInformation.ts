export interface CommonBenefit {
  id: string;
  title: string;
  benefit: string;
  image: string;
}

export interface PaymentOption {
  title: string;
  image: string;
  price: number;
}
export interface MembershipInformation {
  commonBenefits: CommonBenefit[];
  paymentOptions: PaymentOption[];
}

export const membershipInformation: MembershipInformation = {
  commonBenefits: [
    {
      id: '1',
      title: '혜택 1',
      benefit: '경조사비 + α',
      image: '/images/commonBenefits/family_event.png',
    },
    {
      id: '2',
      title: '혜택 2',
      benefit: '사이버 잡일 시키기',
      image: '/images/commonBenefits/cyber_errand.png',
    },
    {
      id: '3',
      title: '혜택 3',
      benefit: 'SNS 빠른 답장',
      image: '/images/commonBenefits/fast_sns_reply.png',
    },
  ],
  paymentOptions: [
    {
      title: '라이트',
      image: '/images/lite.png',
      price: 990,
    },
    {
      title: '일반',
      image: '/images/normal.png',
      price: 2990,
    },
    {
      title: '프리미엄',
      image: '/images/premium.png',
      price: 4990,
    },
  ],
};
