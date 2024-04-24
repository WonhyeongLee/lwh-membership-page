import { http, HttpResponse } from 'msw';

import { membershipBenefits } from '@/assets/membershipBenefits.ts';
import { membershipInformation } from '@/assets/membershipInformation.ts';
import { sponsorsReviews } from '@/assets/sponsorsReviews.ts';

export const handlers = [
  http.get('/api/memberships', () => {
    return HttpResponse.json(membershipInformation);
  }),
  http.get('/api/sponsors-reviews', () => {
    return HttpResponse.json(sponsorsReviews);
  }),
  http.get('/api/membership-benefits', () => {
    return HttpResponse.json(membershipBenefits);
  }),
];
