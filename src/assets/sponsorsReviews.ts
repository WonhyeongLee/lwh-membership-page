export interface SponsorsReviews {
  id: string;
  name: string;
  review: string;
  rating: number;
}

export const sponsorsReviews: SponsorsReviews[] = [
  {
    id: '1',
    name: '근박',
    review: '이길수있어요. 힘내봐요. 서렌치지마요.',
    rating: 5,
  },
  {
    id: '2',
    name: '기박',
    review: '돈이 아깝고 머리가 아파요. 0점이 없어서 1점 드릴게요.',
    rating: 1,
  },
  {
    id: '3',
    name: 'TEST',
    review: '돈이 아깝고 머리가 아파요. 0점이 없어서 1점 드릴게요.',
    rating: 1,
  },
  {
    id: '4',
    name: '김현',
    review: '코스피 나스닥 빝코 다 떨어지고 있어요. 살려주세요',
    rating: 1,
  },
];
