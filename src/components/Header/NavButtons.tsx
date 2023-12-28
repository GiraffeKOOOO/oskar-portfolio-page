import { Stack } from '@mui/material';
import NavButton from './NavButton';

const NavButtons = () => {
  return (
    <Stack flexDirection="row" sx={{ marginTop: '0.5rem', justifyContent: 'center' }}>
      <NavButton>Work</NavButton>
      <NavButton>About Me</NavButton>
      <NavButton>Contact</NavButton>
      <NavButton>Socials</NavButton>
    </Stack>
  );
};

export default NavButtons;
