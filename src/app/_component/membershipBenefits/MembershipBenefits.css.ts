import { style } from '@vanilla-extract/css';

import { baseTheme } from '@/styles/themes.css.ts';

// MembershipBenefits 컴포넌트 스타일
export const MembershipBenefitsContainer = style({
  position: 'relative',
  width: '100%',
  height: '100vh',
  margin: '20px 0',
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
});

// 왼쪽 리스트 스타일
export const BenefitsListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: '75vh',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  backgroundColor: baseTheme.color.contentBackground,
});

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

// 오른쪽 리스트 스타일
export const MembershipListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '75vh',
  border: `1px solid ${baseTheme.color.border}`,
  padding: '60px 20px 20px 20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  backgroundColor: baseTheme.color.background,
});

export const MembershipHeadingWrapper = style({
  textAlign: 'left',
  marginBottom: '20px',
});

export const MembershipHeading = style({
  fontSize: baseTheme.fontSize.title,
  lineHeight: baseTheme.lineHeight.title,
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: baseTheme.color.accent,
});

export const UpgradeButton = style({
  fontSize: baseTheme.fontSize.button,
  lineHeight: baseTheme.lineHeight.button,
  padding: '12px 20px',
  borderRadius: '2px',
  border: `1px solid ${baseTheme.color.accent}`,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: baseTheme.color.accent,
      color: '#fff',
    },
  },
});

export const MembershipListItem = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '24px',
  padding: '16px',
  borderRadius: '4px',
  border: `1px solid ${baseTheme.color.border}`,
  fontSize: baseTheme.fontSize.text,
  lineHeight: baseTheme.lineHeight.text,
  transition: 'background-color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: baseTheme.color.hover,
    },
  },
});

export const MembershipListImage = style({
  marginRight: '16px',
  objectFit: 'cover',
});

export const MembershipListButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  textAlign: 'left',
});
