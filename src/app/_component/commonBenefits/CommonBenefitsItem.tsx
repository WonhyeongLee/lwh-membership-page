// CommonBenefitItem.tsx
import Image from 'next/image';

import * as styles from './CommonBenefits.css';

interface CommonBenefitItemProps {
  benefit: {
    id: string;
    title: string;
    benefit: string;
    image: string;
  };
  className?: string;
}

const CommonBenefitItem: React.FC<CommonBenefitItemProps> = ({
  benefit,
  className,
}) => {
  return (
    <li className={className}>
      <Image
        className={styles.CommonBenefitImage}
        width={338}
        height={259}
        src={benefit.image || 'https://placehold.co/338x259.png'}
        alt={`${benefit.title} 이미지`}
      />
      <div className={styles.CommonBenefitContent}>
        <p className={styles.CommonBenefitTitle}>{benefit.title}</p>
        <p className={styles.CommonBenefitDescription}>{benefit.benefit}</p>
      </div>
    </li>
  );
};

export default CommonBenefitItem;
