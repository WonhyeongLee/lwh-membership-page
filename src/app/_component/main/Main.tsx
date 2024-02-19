// import { getMembershipInfo } from '@/app/_lib/getMembershipInfo.ts';
import Checkout from '../checkout/Checkout';
import CommonBenefits from '../commonBenefits/CommonBenefits';
import Introduction from '../introduction/Introduction';
import MembershipBenefits from '../membershipBenefits/MembershipBenefits';

async function getMembershipInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/membershipInformation`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const commonBenefitsData = await res.json();

  return commonBenefitsData;
}

const Main = async () => {
  const data = await getMembershipInfo();

  console.log(data);

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
// commonBenefits, membershipBenefits, paymentOptions
