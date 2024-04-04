import { style } from '@vanilla-extract/css';

import { baseTheme } from '@/styles/themes.css.ts';

export const MembershipHeadingWrapper = style({
  textAlign: 'left',
  marginBottom: '20px',
});

export const MembershipHeading = style({
  fontSize: baseTheme.fontSize.heading,
  lineHeight: baseTheme.lineHeight.title,
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: baseTheme.color.accent,
});

export const UpgradeButton = style({
  fontSize: baseTheme.fontSize.small,
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
  fontSize: baseTheme.fontSize.base,
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
