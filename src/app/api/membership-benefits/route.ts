import { NextResponse } from 'next/server';

import { membershipBenefits } from '@/assets/membershipBenefits.ts';

export function GET() {
  return NextResponse.json(membershipBenefits);
}
