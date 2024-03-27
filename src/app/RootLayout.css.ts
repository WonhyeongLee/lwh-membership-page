import { style } from '@vanilla-extract/css';

import { mediaQueries } from '@/styles/mediaQueries.css.ts';
import { baseTheme } from '@/styles/themes.css.ts';

export const MainContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  padding: '0',
  backgroundColor: baseTheme.color.background,
  '@media': {
    [mediaQueries.laptop]: {
      padding: '0 30px',
    },
    [mediaQueries.desktop]: {
      padding: '0 120px',
    },
  },
});
