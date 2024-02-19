import { http, HttpResponse } from 'msw';

import { membershipInformation } from '@/model/MembershipInformation.ts';

export const handlers = [
  http.get('/api/membershipInformation', () => {
    return HttpResponse.json(membershipInformation);
  }),
];
