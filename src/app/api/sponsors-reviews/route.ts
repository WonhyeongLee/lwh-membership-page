import { NextResponse } from 'next/server';

import { sponsorsReviews } from '@/assets/sponsorsReviews.ts';

export function GET() {
  return NextResponse.json(sponsorsReviews);
}
