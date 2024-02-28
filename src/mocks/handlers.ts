import { http, HttpResponse } from 'msw';

import { membershipInformation } from '@/model/membershipInformation.ts';

/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
// const membershipInformationJson = JSON.stringify(membershipInformation);
// const byteSize = new TextEncoder().encode(membershipInformationJson).byteLength;

export const handlers = [
  http.get('/api/membership-information', () => {
    return HttpResponse.json(
      membershipInformation,
      // {
      //   headers: {
      //     'Content-Length': String(byteSize),
      //   },
      // },
    );
  }),
];
