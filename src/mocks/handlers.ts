import { http, HttpResponse } from 'msw';
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
export const handlers = [
  http.get('/api/membershipInformation', () => {
    console.log('received request');
    return HttpResponse.json([
      {
        id: 1,
        title: `benefit 1`,
        benefit: `funny benefit 1`,
        image: ``
      }
    ]);
  }),
];
