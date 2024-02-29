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
      <strong>{title}</strong>
      <div className={styles.MembershipImageWrapper}>
        <Image src={imageUrl} alt={`${title} Image`} width={300} height={300} />
      </div>
      <div>{price.toLocaleString()}원</div>
    </li>
  );
};

export default MembershipLevelItem;
