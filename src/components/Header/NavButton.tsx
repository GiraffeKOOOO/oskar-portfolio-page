import { RefObject, useCallback } from 'react';
import { Button, ButtonProps, styled } from '@mui/material';
import { Colours } from '../Theme/Colours';

const StyledNavButton = styled(Button)<ButtonProps>({
  color: Colours.white,
  '&:hover': {
    backgroundColor: `${Colours.navButtonBackground}`,
    textDecoration: 'underline',
  },
  borderRadius: '0.7rem',
  marginLeft: '0.5rem',
  marginRight: '0.4rem',
  textShadow: `0.5px 0.5px ${Colours.backgroundGrey}`,
});

type NavButtonProps = {
  children: string;
  galleryRef?: RefObject<HTMLDivElement>;
};

const NavButton = ({ children, galleryRef }: NavButtonProps) => {
  const scrollToGallery = useCallback(() => {
    galleryRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [galleryRef]);

  return <StyledNavButton onClick={scrollToGallery}>{children}</StyledNavButton>;
};

export default NavButton;
