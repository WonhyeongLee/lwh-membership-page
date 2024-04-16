import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import CommonBenefits from '@/app/_component/commonBenefits/CommonBenefits.tsx';
import Introduction from '@/app/_component/introduction/Introduction.tsx';
import MembershipBenefits from '@/app/_component/membershipBenefits/MembershipBenefits.tsx';
import MembershipGateway from '@/app/_component/membershipGateway/MembershipGateway.tsx';
import { getMembershipBenefits } from '@/app/_lib/getMembershipBenefits.ts';
import { getMembershipInfo } from '@/app/_lib/getMembershipInfo.ts';
import { getSponsorsReview } from '@/app/_lib/getSponsorsReview.ts';
import { useMembershipBenefitsStore } from '@/store/membershipBenefitsStore.ts';

const MainPage = async () => {
  const title = useMembershipBenefitsStore.getState().selectedTitle;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['memberships'],
    queryFn: getMembershipInfo,
  });
  await queryClient.prefetchQuery({
    queryKey: ['sponsors-reviews'],
    queryFn: getSponsorsReview,
  });
  await queryClient.prefetchQuery({
    queryKey: ['membership-benefits'],
    queryFn: () => getMembershipBenefits(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['membership-benefits', `${title}`],
    queryFn: () => getMembershipBenefits(title),
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
