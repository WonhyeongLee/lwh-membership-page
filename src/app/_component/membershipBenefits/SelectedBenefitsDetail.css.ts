import { style } from '@vanilla-extract/css';

import { baseTheme } from '@/styles/themes.css.ts';

export const ImageWrapper = style({
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  marginBottom: '20px',
});

export const ImageStyle = style({
  width: '100%',
  height: '100%',
});

export const BenefitsList = style({
  flex: 2,
  margin: '0',
  width: '70%',
});

export const BenefitsListItem = style({
  padding: '10px 15px',
  margin: '0',
  borderBottom: `1px solid ${baseTheme.color.border}`,
  fontWeight: 'bold',
  textAlign: 'left',
  width: '100%',
  listStyle: 'inside',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: baseTheme.color.hover,
      color: baseTheme.color.accent,
    },
  },
});
