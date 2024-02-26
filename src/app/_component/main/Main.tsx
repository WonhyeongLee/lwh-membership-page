import MembershipGateway from '@/app/_component/membershipGateway/MembershipGateway';
import { getMembershipInfo } from '@/app/_lib/getMembershipInfo.ts';

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
      <MembershipGateway sponsorsReviews={sponsorsReviews} />
    </>
  );
};

export default Main;
