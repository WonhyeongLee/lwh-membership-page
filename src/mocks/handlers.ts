import { http, HttpResponse } from 'msw';

import { membershipInformation } from '@/model/membershipInformation.ts';

export const handlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/membership-information`,
    () => {
      console.log('membership-information 요청을 처리합니다.');
      return HttpResponse.json(membershipInformation);
    },
  ),
];
