import Image from 'next/image';

interface StarIconProps {
  filled: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled }) => {
  const src = filled ? '/images/filledStar.svg' : '/images/emptyStar.svg';
  return <Image src={src} alt="Star Icon" width={24} height={24} />;
};

export default StarIcon;
