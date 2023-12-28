import { Grid, useMediaQuery, useTheme } from '@mui/material';

import { Colours } from './Theme/Colours';
import Header from './Header/Header';

const HomePage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      width={'100vw'}
      height={'100vh'}
      style={{ backgroundColor: `${Colours.backgroundGrey}` }}
    >
      <Grid item xs={12}>
        <Header mobile={mobile} />
      </Grid>

      <Grid item xs={12}>
        <p>hello</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
