import { Grid } from '@mui/material';
import Title from './Title';
import NavButtons from './NavButtons';
import Role from './Role';

const Header = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      //   style={{ height: '400px' }}
      border="1px solid red"
    >
      <Grid item>
        <Title />
      </Grid>

      <Grid item>
        <Role />
      </Grid>

      <Grid item>
        <NavButtons />
      </Grid>
    </Grid>
  );
};

export default Header;
