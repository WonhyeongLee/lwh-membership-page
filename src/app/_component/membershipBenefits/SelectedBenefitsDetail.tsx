import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import { useMembershipBenefitsStore } from '@/store/membershipBenefitsStore.ts';

import * as styles from './SelectedBenefitsDetail.css.ts';

interface SelectedBenefitsDetailProps {
  className?: string;
}

const SelectedBenefitsDetail: React.FC<SelectedBenefitsDetailProps> = ({
  className,
}) => {
  const membershipBenefits = useMembershipBenefitsStore(
    state => state.membershipBenefits,
  );
  const selectedTitle = useMembershipBenefitsStore(
    state => state.selectedTitle,
  );
  const toggleAnimation = useMembershipBenefitsStore(
    state => state.toggleAnimation,
  );
  const selectedBenefits = membershipBenefits.find(
    benefit => benefit.title === selectedTitle,
  )?.benefits;
  const benefitsListRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsDataRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (selectedBenefits) {
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

    { dependencies: [selectedBenefits], scope: membershipBenefitsDataRef },
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
      <ul ref={membershipBenefitsDataRef} className={styles.BenefitsList}>
        {selectedBenefits ? (
          selectedBenefits.map(benefit => (
            <li key={benefit.id} className={styles.BenefitsListItem}>
              {benefit.benefit}
            </li>
          ))
        ) : (
          <p>혜택을 선택하세요.</p>
        )}
      </ul>
    </div>
  );
};

export default SelectedBenefitsDetail;
