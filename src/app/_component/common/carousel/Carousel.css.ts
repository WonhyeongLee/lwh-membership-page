import { style } from '@vanilla-extract/css';

export const carouselContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 40px',
  overflow: 'hidden',
  width: '100%',
  flexDirection: 'row',
});

export const buttonBase = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1,
});

export const prevButton = style([
  buttonBase,
  {
    left: '-5px',
  },
]);

export const nextButton = style([
  buttonBase,
  {
    right: '1px',
  },
]);
