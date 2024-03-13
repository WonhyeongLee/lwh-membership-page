import { style } from '@vanilla-extract/css';

import { baseTheme } from '@/styles/themes.css.ts';

export const SponsorsReviewSection = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '20px',
  backgroundColor: '#f8f8f8',
  alignItems: 'center',
  width: '100%',
  gap: '20px',
});

export const SponsorsReviewHeading = style({
  gridColumn: '1',
  display: 'block',
  textAlign: 'center',
});

export const SponsorsReviewCard = style({
  flex: 'none',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  margin: '0 10px',
  borderRadius: '4px',
  width: 'calc(50% - 30px)',
});

export const SponsorsReviewAuthor = style({
  display: 'flex',
  fontWeight: 'bold',
  marginBottom: '10px',
  gap: '10px',
});
export const SponsorsReviewText = style({
  fontSize: baseTheme.fontSize.text,
  color: '#333',
  marginBottom: '10px',
  wordWrap: 'break-word',
  height: '100px',
});

export const SponsorsReviewInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const SponsorsReviewRating = style({
  // 나중에 추가
});
