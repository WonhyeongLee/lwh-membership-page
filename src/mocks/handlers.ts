import { http, HttpResponse } from 'msw';

import { membershipInformation } from '@/model/membershipInformation.ts';
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
export const handlers = [
  http.get('/api/membership-information', () => {
    console.log('received request');
    return HttpResponse.json(membershipInformation);
  }),
];
