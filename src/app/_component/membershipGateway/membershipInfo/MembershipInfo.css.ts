import { style } from '@vanilla-extract/css';

export const MembershipPriceContainer = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1200px',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
});

export const MembershipPriceHeading = style({
  fontSize: '3vw',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '20px 0',
});

export const Text = style({
  fontSize: '2vw',
  textAlign: 'center',
  margin: '0 0 20px 0',
  color: '#666',
});

export const MembershipLevelList = style({
  width: '100%',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
});

export const MembershipLevelItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'calc(50% - 10px)',
  height: '100%',
  borderRadius: '4px',
  gap: '10px',
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center',
});

export const MembershipImageWrapper = style({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const OverlayContainer = style({
  position: 'relative',
  width: '100%',
});

export const Overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: 'blur(8px)',
  zIndex: 10,
});

export const LinkButtons = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 20,
});

export const Link = style({
  display: 'block',
  margin: '10px 0',
});
