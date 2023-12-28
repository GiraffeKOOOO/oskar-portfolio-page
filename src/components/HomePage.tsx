import { Grid } from '@mui/material';
import Header from './Header/Header';
import { Colours } from './Theme/Colours';

const HomePage = () => {
  return (
    <Grid
      container
      width={'100vw'}
      height={'100vh'}
      style={{ backgroundColor: `${Colours.backgroundGrey}` }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <p>hello</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
