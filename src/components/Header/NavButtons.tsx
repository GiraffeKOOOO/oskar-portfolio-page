import { RefObject } from 'react';
import { Stack } from '@mui/material';
import NavButton from './NavButton';

type NavButtonsProps = {
  galleryRef: RefObject<HTMLDivElement>;
  socialsRef: RefObject<HTMLDivElement>;
};

const NavButtons = ({ galleryRef, socialsRef }: NavButtonsProps) => {
  return (
    <Stack flexDirection="row" sx={{ marginTop: '0.5rem', justifyContent: 'center' }}>
      <NavButton galleryRef={galleryRef}>Work</NavButton>
      <NavButton>About Me</NavButton>
      <NavButton socialsRef={socialsRef}>Socials</NavButton>
      <NavButton>Contact</NavButton>
    </Stack>
  );
};

export default NavButtons;
