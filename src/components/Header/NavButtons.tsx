import { Stack } from '@mui/material';
import NavButton from './NavButton';
import { RefObject } from 'react';

type NavButtonsProps = {
  galleryRef: RefObject<HTMLDivElement>;
};

const NavButtons = ({ galleryRef }: NavButtonsProps) => {
  return (
    <Stack flexDirection="row" sx={{ marginTop: '0.5rem', justifyContent: 'center' }}>
      <NavButton galleryRef={galleryRef}>Work</NavButton>
      <NavButton>About Me</NavButton>
      <NavButton>Socials</NavButton>
      <NavButton>Contact</NavButton>
    </Stack>
  );
};

export default NavButtons;
