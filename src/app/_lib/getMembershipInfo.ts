import type { MembershipInformation } from '@/assets/membershipInformation';

const baseUrl =
  process.env.NEXT_PUBLIC_API_MOCK_ENABLED === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_URL
    : process.env.NEXT_PROD_URL;

export async function getMembershipInfo(): Promise<MembershipInformation> {
  const response = await fetch(`${baseUrl}/api/memberships`, {
    next: {
      tags: ['memberships'],
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: MembershipInformation = await response.json();
  return data;
}
