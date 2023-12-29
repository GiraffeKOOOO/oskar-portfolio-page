import { RefObject } from 'react';
import { Stack } from '@mui/material';
import NavButton from './NavButton';

type NavButtonsProps = {
  galleryRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  socialsRef: RefObject<HTMLDivElement>;
};

const NavButtons = ({ galleryRef, aboutRef, socialsRef }: NavButtonsProps) => {
  return (
    <Stack flexDirection="row" sx={{ marginTop: '0.5rem', justifyContent: 'center' }}>
      <NavButton galleryRef={galleryRef}>Work</NavButton>
      <NavButton aboutRef={aboutRef}>About Me</NavButton>
      <NavButton socialsRef={socialsRef}>Socials</NavButton>
      <NavButton>Contact</NavButton>
    </Stack>
  );
};

export default NavButtons;
