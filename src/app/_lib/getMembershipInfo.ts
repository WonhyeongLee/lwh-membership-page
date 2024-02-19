export async function getMembershipInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/membershipInformation`,
    {
      credentials: 'include',
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  // 응답 본문을 한 번만 읽습니다.
  // const data = await res.json();

  return res.json();
}
