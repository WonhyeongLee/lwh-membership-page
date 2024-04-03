import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import * as styles from './SelectedBenefitsDetail.css.ts';

import type { MembershipBenefit } from '@/model/membershipInformation.ts';

interface SelectedBenefitsDetailProps {
  selectedTitle: string;
  membershipBenefits: MembershipBenefit[];
  className?: string;
}

const SelectedBenefitsDetail: React.FC<SelectedBenefitsDetailProps> = ({
  membershipBenefits,
  selectedTitle,
  className,
}) => {
  const selectedBenefits = membershipBenefits.find(
    benefit => benefit.title === selectedTitle,
  )?.benefits;
  const benefitsListRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsDataRef = useRef<HTMLUListElement>(null);
  const isAnimatingRef = useRef(false);

  useGSAP(
    () => {
      if (selectedBenefits) {
        isAnimatingRef.current = true;
        gsap.from(`.${styles.BenefitsListItem}`, {
          opacity: 0,
          x: -20,
          stagger: 0.1,
          duration: 0.5,
          onComplete: () => {
            isAnimatingRef.current = false;
            gsap.killTweensOf(`.${styles.BenefitsListItem}`);
          },
        });
      }
    },
    { dependencies: [selectedTitle], scope: membershipBenefitsDataRef },
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
