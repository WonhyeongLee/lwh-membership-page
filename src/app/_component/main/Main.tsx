import { getMembershipInfo } from '@/app/_lib/getMembershipInfo.ts';

import Checkout from '../checkout/Checkout';
import CommonBenefits from '../commonBenefits/CommonBenefits';
import Introduction from '../introduction/Introduction';
import MembershipBenefits from '../membershipBenefits/MembershipBenefits';

const Main = async () => {
  const {
    commonBenefits,
    membershipBenefits,
    paymentOptions,
    sponsorsReviews,
  } = await getMembershipInfo();

  console.log(paymentOptions);

  return (
    <>
      <Introduction />
      <CommonBenefits commonBenefits={commonBenefits} />
      <MembershipBenefits membershipBenefits={membershipBenefits} />
      <Checkout sponsorsReviews={sponsorsReviews} />
    </>
  );
};

export default Main;
