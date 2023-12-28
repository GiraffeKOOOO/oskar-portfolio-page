import { Grid } from '@mui/material';
import Title from './Title';
import NavButtons from './NavButtons';
import Role from './Role';
import BackgroundWrapper from './BackgroundWrapper';

type HeaderProps = {
  mobile: boolean;
};

const Header = ({ mobile }: HeaderProps) => {
  if (mobile) {
    return (
      <BackgroundWrapper>
        <Grid container direction="column" alignContent="center" style={{ paddingTop: '120px' }}>
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
      </BackgroundWrapper>
    );
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
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
