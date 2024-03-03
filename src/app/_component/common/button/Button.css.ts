import { style } from '@vanilla-extract/css';

export const Button = style({
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});
