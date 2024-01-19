import { http, HttpResponse } from 'msw';

import { API_URL } from '@/api';

import { mockData } from './mock-data';

export const handlers = [
  http.get(API_URL, () => {
    return new HttpResponse(mockData);
  }),
];
