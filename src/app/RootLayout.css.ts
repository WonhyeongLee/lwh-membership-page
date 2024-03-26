import { style } from '@vanilla-extract/css';

import { baseTheme } from '@/styles/themes.css.ts';

export const MainContainer = style({
  padding: '0 120px',
  backgroundColor: baseTheme.color.background,
});
