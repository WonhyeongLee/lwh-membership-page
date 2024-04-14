import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import CommonBenefits from '@/app/_component/commonBenefits/CommonBenefits.tsx';
import Introduction from '@/app/_component/introduction/Introduction.tsx';
import MembershipBenefits from '@/app/_component/membershipBenefits/MembershipBenefits.tsx';
import MembershipGateway from '@/app/_component/membershipGateway/MembershipGateway.tsx';
import { getMembershipInfo } from '@/app/_lib/getMembershipInfo.ts';

const MainPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['membership-information'],
    queryFn: getMembershipInfo,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <MembershipGateway />
    </HydrationBoundary>
  );
};

export default MainPage;
