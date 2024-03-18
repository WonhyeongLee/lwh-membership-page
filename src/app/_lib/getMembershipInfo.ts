const baseUrl =
  process.env.NEXT_PUBLIC_API_MOCK_ENABLED === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_URL // Mock 서버 URL
    : process.env.NEXT_PROD_URL;

export async function getMembershipInfo() {
  const response = await fetch(`${baseUrl}/api/membership-information`, {
    credentials: 'include',
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
