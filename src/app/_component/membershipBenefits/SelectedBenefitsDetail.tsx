import { useGSAP } from '@gsap/react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import { getMembershipBenefits } from '@/app/_lib/getMembershipBenefits.ts';
import { useMembershipBenefitsStore } from '@/store/membershipBenefitsStore.ts';

import * as styles from './SelectedBenefitsDetail.css.ts';

interface SelectedBenefitsDetailProps {
  className?: string;
}

const SelectedBenefitsDetail: React.FC<SelectedBenefitsDetailProps> = ({
  className,
}) => {
  const title = useMembershipBenefitsStore(state => state.selectedTitle);
  const { data, isLoading } = useQuery({
    queryKey: ['membership-benefits', title],
    queryFn: () => getMembershipBenefits(title),
    placeholderData: keepPreviousData,
  });
  const toggleAnimation = useMembershipBenefitsStore(
    state => state.toggleAnimation,
  );
  const benefitsListRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isLoading && data && data.length > 0) {
        toggleAnimation();
        gsap.from(`.${styles.BenefitsListItem}`, {
          opacity: 0,
          x: -20,
          stagger: 0.1,
          duration: 0.5,
          onComplete: () => {
            toggleAnimation();
            gsap.killTweensOf(`.${styles.BenefitsListItem}`);
          },
        });
      }
    },
    { dependencies: [data], scope: benefitsListRef },
  );

  return (
    <div ref={benefitsListRef} className={className}>
      <div className={styles.ImageWrapper}>
        <Image
          className={styles.ImageStyle}
          src={'https://placehold.co/400.png'}
          width={400}
          height={400}
          alt="멤버쉽 혜택 이미지"
        />
      </div>
      <ul className={styles.BenefitsList}>
        {data && data.length > 0 ? (
          data.map(benefit =>
            benefit.benefits.map(detail => (
              <li key={detail.id} className={styles.BenefitsListItem}>
                {detail.benefit}
              </li>
            )),
          )
        ) : (
          <p>혜택을 선택하세요.</p>
        )}
      </ul>
    </div>
  );
};

export default SelectedBenefitsDetail;
