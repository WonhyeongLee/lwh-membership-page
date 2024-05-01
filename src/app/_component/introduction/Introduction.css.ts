import { style } from '@vanilla-extract/css';

import { mediaQueries } from '@/styles/mediaQueries.css.ts';

export const introContainer = style({
  visibility: 'hidden',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr',
    },
  },
});

export const introImageContainer = style({
  position: 'relative',
  width: '100%',
  height: '62.5vh',
  maxWidth: '600px',
  maxHeight: '750px',
  margin: 'auto',
  '@media': {
    [mediaQueries.mobile]: {
      width: '30vh',
      height: '46vh',
      marginBottom: '-50px',
    },
  },
});

export const introTextContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  marginLeft: '2rem',
  overflow: 'hidden',
  '@media': {
    [mediaQueries.mobile]: {
      height: '50vh',
    },
  },
});

export const profileImage = style({
  minWidth: '150px',
  minHeight: '150px',
  '@media': {
    [mediaQueries.mobile]: {
      minWidth: '30vh',
      minHeight: '42.5vh',
    },
    [mediaQueries.tablet]: {
      minWidth: '100px',
      minHeight: '100px',
    },
    [mediaQueries.laptop]: {
      minWidth: '120px',
      minHeight: '120px',
    },
  },
});

export const introTextBox = style({
  position: 'relative',
  flex: '0 0 auto',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: '395px',
});

export const introText = style({
  fontWeight: 'bold',
  fontSize: '70px',
  lineHeight: '1.3',
  margin: '0',
  padding: '0',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '40px',
    },
    [mediaQueries.tablet]: {
      fontSize: '50px',
    },
    [mediaQueries.laptop]: {
      fontSize: '60px',
    },
  },
});
