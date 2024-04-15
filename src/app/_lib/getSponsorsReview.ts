const baseUrl =
  process.env.NEXT_PUBLIC_API_MOCK_ENABLED === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_URL
    : process.env.NEXT_PROD_URL;

export async function getSponsorsReview() {
  const response = await fetch(`${baseUrl}/api/sponsors-reviews`, {
    next: {
      tags: ['sponsors-reviews'],
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
