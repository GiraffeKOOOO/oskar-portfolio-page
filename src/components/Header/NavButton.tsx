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
  aboutRef?: RefObject<HTMLDivElement>;
  socialsRef?: RefObject<HTMLDivElement>;
};

const NavButton = ({ children, galleryRef, aboutRef, socialsRef }: NavButtonProps) => {
  const scrollToGallery = useCallback(() => {
    galleryRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [galleryRef]);

  const scrollToAbout = useCallback(() => {
    aboutRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [aboutRef]);

  const scrollToSocials = useCallback(() => {
    socialsRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [socialsRef]);

  if (galleryRef) {
    return <StyledNavButton onClick={scrollToGallery}>{children}</StyledNavButton>;
  }

  if (aboutRef) {
    return <StyledNavButton onClick={scrollToAbout}>{children}</StyledNavButton>;
  }

  if (socialsRef) {
    return <StyledNavButton onClick={scrollToSocials}>{children}</StyledNavButton>;
  }

  return <StyledNavButton>{children}</StyledNavButton>;
};

export default NavButton;
