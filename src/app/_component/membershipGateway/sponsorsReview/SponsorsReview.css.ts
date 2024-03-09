import { style } from '@vanilla-extract/css';

import { baseTheme } from '@/styles/themes.css.ts';

export const SponsorsReviewSection = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '20px',
  backgroundColor: '#f8f8f8',
  alignItems: 'center',
  width: '100%',
});

export const SponsorsReviewHeading = style({
  display: 'block',
  flex: '1',
  textAlign: 'center',
});

// TODO: 슬라이드 스타일 수정
export const SponsorsReviewContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flex: '1',
  justifyContent: 'flex-end',
  width: 'auto',
  overflowX: 'hidden',
});

export const SponsorsReviewCard = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  margin: '10px',
  borderRadius: '4px',
  maxWidth: '280px',
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
