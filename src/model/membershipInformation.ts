/* eslint-disable semi */
/* eslint-disable prettier/prettier */
export interface CommonBenefit {
  id: string;
  title: string;
  benefit: string;
  image: string;
}

export interface MembershipBenefitDetail {
  id: string;
  benefit: string;
}

export interface MembershipBenefit {
  title: string;
  description: string;
  benefits: MembershipBenefitDetail[];
}

export interface PaymentOption {
  title: string;
  image: string;
  price: number;
}
export interface SponsorsReviews {
  name: string;
  review: string;
  rating: number;
}

export interface MembershipInformation {
  commonBenefits: CommonBenefit[];
  membershipBenefits: MembershipBenefit[];
  paymentOptions: PaymentOption[];
  sponsorsReviews: SponsorsReviews[];
}

export const membershipInformation: MembershipInformation = {
  commonBenefits: [
    {
      id: '1',
      title: '혜택 1',
      benefit: '경조사비 + α',
      image: '',
    },
    {
      id: '2',
      title: '혜택 2',
      benefit: '사이버 잡일 시키기',
      image: '',
    },
    {
      id: '3',
      title: '혜택 3',
      benefit: 'SNS 빠른 답장',
      image: '',
    },
  ],
  membershipBenefits: [
    {
      title: '라이트 혜택',
      description: '맛보기 기능을 제공합니다',
      benefits: [
        { id: '1', benefit: '1회 게임 동원권' },
        { id: '2', benefit: '1회 롤 서렌 거부권' },
        { id: '3', benefit: '먹고있는 음식 사진 제공' },
      ],
    },
    {
      title: '일반 혜택',
      description: '기본 가격으로 표준혜택을 제공합니다',
      benefits: [
        { id: '1', benefit: '기상, 취침 시간 보고' },
        { id: '2', benefit: '진심이 담긴 감사편지' },
        { id: '3', benefit: '하루 근황 보고 제공 (요구시)' },
        { id: '4', benefit: '4회 롤 서렌 동원권' },
        { id: '5', benefit: '4회 게임 동원권' },
      ],
    },
    {
      title: '프리미엄 혜택',
      description: '일반 혜택에 더해 여러 추가 기능을 제공합니다',
      benefits: [
        { id: '1', benefit: '실시간 행동 확인가능' },
        { id: '2', benefit: 'SNS 반응대상 1순위 등록' },
        { id: '3', benefit: '무제한 롤 서렌 동원권' },
        { id: '4', benefit: '月 1회 취침, 기상시간 강제권' },
      ],
    },
  ],
  sponsorsReviews: [
    {
      name: '근박',
      review: '이길수있어요. 힘내봐요. 서렌치지마요.',
      rating: 5,
    },
    {
      name: '기박',
      review: '돈이 아깝고 머리가 아파요. 0점이 없어서 1점 드릴게요.',
      rating: 1,
    },
    {
      name: 'TEST',
      review: '돈이 아깝고 머리가 아파요. 0점이 없어서 1점 드릴게요.',
      rating: 1,
    },
    {
      name: '김현',
      review: '코스피 나스닥 빝코 다 떨어지고 있어요. 살려주세요',
      rating: 1,
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
}
