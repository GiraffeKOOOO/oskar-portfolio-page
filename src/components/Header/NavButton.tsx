import { Button, ButtonProps, styled } from '@mui/material';
import { Colours } from '../Theme/Colours';

const StyledNavButton = styled(Button)<ButtonProps>({
  color: Colours.white,
  '&:hover': {
    backgroundColor: `${Colours.navButtonBackground}`,
  },
  borderRadius: '0.7rem',
  marginLeft: '0.5rem',
  marginRight: '0.4rem',
});

type NavButtonProps = {
  children: string;
};

const NavButton = ({ children }: NavButtonProps) => {
  return <StyledNavButton>{children}</StyledNavButton>;
};

export default NavButton;
