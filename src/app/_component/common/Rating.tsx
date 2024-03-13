import StarIcon from './StarIcon';
interface RatingProps {
  rating: number;
}
const MAX_RATING = 5;

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(MAX_RATING)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
};

export default Rating;
