import { NextResponse } from 'next/server';

import { membershipInformation } from '@/assets/membershipInformation.ts';

export function GET() {
  return NextResponse.json(membershipInformation);
}
