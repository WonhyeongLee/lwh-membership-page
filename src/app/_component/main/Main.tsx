import { MembershipInformation } from '@/model/membershipInformation.ts';

import Checkout from '../checkout/Checkout';
import CommonBenefits from '../commonBenefits/CommonBenefits';
import Introduction from '../introduction/Introduction';
import MembershipBenefits from '../membershipBenefits/MembershipBenefits';

async function fetchCommonBenefits(): Promise<MembershipInformation> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/membership-information`,
  );
  if (!response.ok) {
    throw new Error('서버로부터 데이터를 가져오는 데 실패했습니다.');
  }
  const data = (await response.json()) as MembershipInformation;
  return data;
}

const Main = async () => {
  const { commonBenefits, membershipBenefits, paymentOptions } =
    await fetchCommonBenefits();

  return (
    <>
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <Checkout />
    </>
  );
};

export default Main;
