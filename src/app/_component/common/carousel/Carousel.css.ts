import { style } from '@vanilla-extract/css';

export const carouselContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 20px',
  overflow: 'hidden',
  width: '100%',
  flexDirection: 'row',
});

export const buttonBase = style({
  border: 'none',
  backgroundColor: '#f8f8f8',
});

export const prevButton = style([buttonBase]);

export const nextButton = style([buttonBase]);
