import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        height: 'calc(100vh - 65.3px)',
      }}
    >
      <Typography variant="h4" color="initial">
        Welcome to my App
      </Typography>
    </Box>
  );
};

export default Home;
