import CommonBenefits from '@/app/_component/commonBenefits/CommonBenefits.tsx';
import Introduction from '@/app/_component/introduction/Introduction.tsx';
import MembershipBenefits from '@/app/_component/membershipBenefits/MembershipBenefits.tsx';
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
    <>
      <Introduction />
      <CommonBenefits commonBenefits={commonBenefits} />
      <MembershipBenefits membershipBenefits={membershipBenefits} />
      <MembershipGateway
        sponsorsReviews={sponsorsReviews}
        paymentOptions={paymentOptions}
      />
    </>
  );
};

export default MainPage;
