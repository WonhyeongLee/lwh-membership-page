import type { MembershipBenefit } from '@/assets/membershipBenefits.ts';

const baseUrl =
  process.env.NEXT_PUBLIC_API_MOCK_ENABLED === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_URL
    : process.env.NEXT_PROD_URL;

export async function getMembershipBenefits(
  title?: string,
): Promise<MembershipBenefit[]> {
  const response = await fetch(`${baseUrl}/api/membership-benefits`, {
    next: {
      tags: ['membership-benefits'],
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: MembershipBenefit[] = await response.json();

  if (title === '' && data.length > 0) {
    title = data[0].title;
  }

  if (!title || data.length === 0) {
    return data;
  }

  const filteredBenefits = data.filter(benefit => benefit.title === title);
  return filteredBenefits;
}
