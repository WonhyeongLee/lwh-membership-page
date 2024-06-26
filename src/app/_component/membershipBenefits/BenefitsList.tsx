import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRef } from 'react';

import { getMembershipBenefits } from '@/app/_lib/getMembershipBenefits.ts';
import { useMembershipBenefitsStore } from '@/store/membershipBenefitsStore.ts';

import * as styles from './BenefitsList.css';

interface BenefitsListProps {
  className?: string;
}

const BenefitsList: React.FC<BenefitsListProps> = ({ className }) => {
  const { data } = useQuery({
    queryKey: ['membership-benefits'],
    queryFn: () => getMembershipBenefits(),
  });
  const setSelectedTitle = useMembershipBenefitsStore(
    state => state.setSelectedTitle,
  );
  const membershipHeadingRef = useRef<HTMLHeadingElement>(null);
  const membershipBenefitsListRef = useRef<HTMLUListElement>(null);

  const handleItemClick = (title: string): void => {
    setSelectedTitle(title);
  };

  const handleKeyDown = (e: React.KeyboardEvent, title: string): void => {
    if (e.key === 'Enter') {
      setSelectedTitle(title);
    }
  };

  return (
    <div className={className}>
      <div
        ref={membershipHeadingRef}
        className={styles.MembershipHeadingWrapper}
      >
        <h2 className={styles.MembershipHeading}>등급별 혜택</h2>
        <button className={styles.UpgradeButton}>Upgrade Now</button>
      </div>
      <ul ref={membershipBenefitsListRef}>
        {data?.map((benefit, index) => (
          <li key={index} className={styles.MembershipListItem}>
            <Image
              src={benefit.image || 'https://placehold.co/100.png'}
              width={100}
              height={100}
              alt={benefit.title}
              className={styles.MembershipListImage}
            />
            <button
              className={styles.MembershipListButton}
              onClick={() => handleItemClick(benefit.title)}
              onKeyDown={e => handleKeyDown(e, benefit.title)}
            >
              <strong>{benefit.title}</strong>
              <p>{benefit.description}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;
