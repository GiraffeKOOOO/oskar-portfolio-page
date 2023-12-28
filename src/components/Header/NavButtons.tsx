import { Stack } from '@mui/material';
import NavButton from './NavButton';

const NavButtons = () => {
  return (
    <Stack flexDirection="row" sx={{ marginTop: '0.5rem' }}>
      <NavButton>About Me</NavButton>
      <NavButton>Work</NavButton>
      <NavButton>Contact</NavButton>
    </Stack>
  );
};

export default NavButtons;
