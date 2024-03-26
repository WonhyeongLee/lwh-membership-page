import Image from 'next/image';

import * as styles from './MembershipInfo.css.ts';

interface MembershipLevelItemProps {
  title: string;
  imageUrl: string;
  price: number;
}

const MembershipLevelItem = ({
  title,
  imageUrl,
  price,
}: MembershipLevelItemProps) => {
  return (
    <li className={styles.MembershipLevelItem}>
      <h3 className={styles.MembershipLevelItemText}>{title}</h3>
      <div className={styles.MembershipImageWrapper}>
        <Image src={imageUrl} alt={`${title} Image`} width={300} height={300} />
      </div>
      <div className={styles.MembershipLevelItemText}>
        {price.toLocaleString()}원
      </div>
    </li>
  );
};

export default MembershipLevelItem;
