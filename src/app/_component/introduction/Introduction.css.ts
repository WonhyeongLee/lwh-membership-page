import { style } from '@vanilla-extract/css';

import { mediaQueries } from '@/styles/mediaQueries.css.ts';

export const introContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

export const introImageContainer = style({
  position: 'relative',
  width: '70%',
  height: '62.5vh', // 뷰포트 높이의 75%를 높이로 사용
  maxWidth: '600px',
  maxHeight: '750px',
  margin: 'auto',
  filter: `
  drop-shadow(5px 0px 0px rgba(240, 46, 170, 0.4))
  drop-shadow(10px 0px 0px rgba(240, 46, 170, 0.3))
  drop-shadow(15px 0px 0px rgba(240, 46, 170, 0.2))
  drop-shadow(20px 0px 0px rgba(240, 46, 170, 0.1))
  drop-shadow(25px 0px 0px rgba(240, 46, 170, 0.05))
`,
  '@media': {
    [mediaQueries.mobile]: {
      width: '30vh',
      height: '42.5vh',
    },
  },
});

export const introTextContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  marginLeft: '2rem',
  overflow: 'hidden',
});

export const profileImage = style({
  minWidth: '150px',
  minHeight: '150px',
  clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)',
  '@media': {
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
  height: '100vh',
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
