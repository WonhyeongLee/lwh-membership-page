export async function getMembershipInfo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/membership-information`,
    {
      credentials: 'include',
      cache: 'no-store',
    },
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
