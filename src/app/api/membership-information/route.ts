import { NextResponse } from 'next/server';

import { membershipInformation } from '@/model/membershipInformation.ts';

export function GET() {
  return NextResponse.json(membershipInformation);
}
