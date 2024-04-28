import type { SponsorsReviews } from '@/assets/sponsorsReviews';

const baseUrl =
  process.env.NEXT_PUBLIC_API_MOCK_ENABLED === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_URL
    : process.env.NEXT_PUBLIC_SERVICE_ENDPOINT;

export async function getSponsorsReview(): Promise<SponsorsReviews[]> {
  const response = await fetch(`${baseUrl}/api/sponsors-reviews`, {
    next: {
      tags: ['sponsors-reviews'],
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: SponsorsReviews[] = await response.json();
  return data;
}
