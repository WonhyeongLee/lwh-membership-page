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

export const BenefitsListWrapper = style({
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

export const SelectedBenefitsDetailWrapper = style({
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
