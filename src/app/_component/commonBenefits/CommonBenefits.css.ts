import { style } from '@vanilla-extract/css';

import { mediaQueries } from '@/styles/mediaQueries.css.ts';
import { baseTheme } from '@/styles/themes.css.ts';

export const CommonBenefitsContainer = style({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 0',
  textAlign: 'center',
});

export const CommonBenefitsHeading = style({
  fontSize: '4rem',
  marginBottom: '1rem',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '2rem',
    },
    [mediaQueries.tablet]: {
      fontSize: '3rem',
    },
  },
});

export const CommonBenefitsComment = style({
  fontSize: '2rem',
  marginBottom: '3rem',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '1rem',
    },
  },
});

export const CommonBenefitsItemWrapper = style({
  columnGap: '50px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem',
  '@media': {
    [mediaQueries.mobile]: {
      flexDirection: 'column',
      width: '90%',
      justifyContent: 'flex-start',
      overflow: 'hidden',
    },
  },
});

export const CommonBenefitItem = style({
  width: '400px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: `1px solid ${baseTheme.color.border}`,
  '@media': {
    [mediaQueries.mobile]: {
      width: '100%',
    },
  },
});

export const CommonBenefitImage = style({
  width: '100%',
  height: '80%',
  borderBottom: `1px solid ${baseTheme.color.border}`,
});

export const CommonBenefitContent = style({
  width: '100%',
  fontWeight: 'bold',
  textAlign: 'left',
  alignSelf: 'flex-start',
  margin: '0.5rem 1rem 0.5rem 1rem',
  fontSize: baseTheme.fontSize.base,
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: baseTheme.fontSize.xsmall,
    },
  },
});

export const CommonBenefitTitle = style({
  fontSize: baseTheme.fontSize.base,
});

export const CommonBenefitDescription = style({
  fontSize: baseTheme.fontSize.small,
});

export const CommonBenefitsList = style({
  width: '100%',
  fontSize: `${baseTheme.fontSize.base}`,
  fontWeight: 'bold',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  color: baseTheme.color.accent,
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: `${baseTheme.fontSize.xsmall}`,
    },
    [mediaQueries.tablet]: {
      fontSize: `${baseTheme.fontSize.small}`,
    },
    [mediaQueries.laptop]: {
      fontSize: `${baseTheme.fontSize.medium}`,
    },
  },
});
