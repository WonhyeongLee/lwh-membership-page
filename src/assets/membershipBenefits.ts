export interface MembershipBenefitDetail {
  id: string;
  benefit: string;
}

export interface MembershipBenefit {
  image: string;
  title: string;
  description: string;
  benefits: MembershipBenefitDetail[];
}

export const membershipBenefits: MembershipBenefit[] = [
  {
    image: '/images/membershipBenefits/lite_mini.png',
    title: '라이트 혜택',
    description: '맛보기 기능을 제공합니다',
    benefits: [
      { id: '1', benefit: '1회 게임 동원권' },
      { id: '2', benefit: '1회 롤 서렌 거부권' },
      { id: '3', benefit: '먹고있는 음식 사진 제공' },
    ],
  },
  {
    image: '/images/membershipBenefits/normal_mini.png',
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
    image: '/images/membershipBenefits/premium_mini.png',
    title: '프리미엄 혜택',
    description: '일반 혜택에 더해 여러 추가 기능을 제공합니다',
    benefits: [
      { id: '1', benefit: '실시간 행동 확인가능' },
      { id: '2', benefit: 'SNS 반응대상 1순위 등록' },
      { id: '3', benefit: '무제한 롤 서렌 동원권' },
      { id: '4', benefit: '月 1회 취침, 기상시간 강제권' },
    ],
  },
];
