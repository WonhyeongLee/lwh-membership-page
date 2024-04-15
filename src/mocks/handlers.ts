import { http, HttpResponse } from 'msw';

import { membershipBenefits } from '@/model/membershipBenefits.ts';
import { membershipInformation } from '@/model/membershipInformation.ts';
import { sponsorsReviews } from '@/model/sponsorsReview.ts';

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
