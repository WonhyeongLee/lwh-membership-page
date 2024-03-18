'use client';
import { FC, useState, ReactElement } from 'react';

import * as styles from './Carousel.css.ts';

interface CarouselProps {
  children: ReactElement[];
  itemsToShow: number;
}

const Carousel: FC<CarouselProps> = ({ children, itemsToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalChildren = children.length;

  const goToPrev = () =>
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : totalChildren - 1,
    );
  const goToNext = () =>
    setCurrentIndex(prevIndex =>
      prevIndex < totalChildren - 1 ? prevIndex + 1 : 0,
    );

  const activeItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    const itemIndex = (currentIndex + i) % totalChildren;
    activeItems.push(children[itemIndex]);
  }

  return (
    <div className={styles.carouselContainer}>
      <button
        onClick={goToPrev}
        aria-label="Previous"
        className={styles.prevButton}
      >
        &lt;
      </button>
      {activeItems}
      <button
        onClick={goToNext}
        aria-label="Next"
        className={styles.nextButton}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
