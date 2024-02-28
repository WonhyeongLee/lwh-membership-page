import { http, HttpResponse } from 'msw';

import { membershipInformation } from '@/model/membershipInformation.ts';

export const handlers = [
  http.get('/api/membership-information', () => {
    return HttpResponse.json(membershipInformation);
  }),
];
