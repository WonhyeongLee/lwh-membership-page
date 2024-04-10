import CommonBenefits from '@/app/_component/commonBenefits/CommonBenefits.tsx';
import Introduction from '@/app/_component/introduction/Introduction.tsx';
import MembershipBenefits from '@/app/_component/membershipBenefits/MembershipBenefits.tsx';
import MembershipDataProvider from '@/app/_component/MembershipDataProvider.tsx';
import MembershipGateway from '@/app/_component/membershipGateway/MembershipGateway.tsx';
import { getMembershipInfo } from '@/app/_lib/getMembershipInfo.ts';

const MainPage = async () => {
  const {
    commonBenefits,
    membershipBenefits,
    paymentOptions,
    sponsorsReviews,
  } = await getMembershipInfo();

  return (
    <MembershipDataProvider
      commonBenefits={commonBenefits}
      membershipBenefits={membershipBenefits}
      paymentOptions={paymentOptions}
      sponsorsReviews={sponsorsReviews}
    >
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <MembershipGateway />
    </MembershipDataProvider>
  );
};

export default MainPage;
