import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h6 = {
  fontWeight: '500',
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: 1,
          height: '500px',
          backgroundColor: '#C3C2B4',
          borderRadius: '33px',
          mt: '200px',
          mb: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: '50px',
          }}
        >
          <Avatar
            alt="Remy Sharp"
            srcSet="https://citaty.info/files/styles/poster/public/characters/8604.jpg?itok=_bemMaL1"
            sx={{
              width: { sm: '250px', md: '270px', xs: '200px' },
              height: { sm: '250px', md: '270px', xs: '200px' },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 1,
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" color="initial">
            Harry Potter
          </Typography>
          <Typography variant="subtitle1" color="#696969">
            Wizard
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: '10px',
              mb: '40px',
              backgroundColor: '#d1d0c7',
              borderRadius: '33px',
            }}
          >
            <Box
              sx={{
                pr: '20px',
                textAlign: 'right',
                fontFamily: 'roboto',
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h6"
                  color="#696969"
                  sx={{
                    pt: '15px',
                  }}
                >
                  City
                </Typography>
                <Typography variant="h6" color="#696969">
                  Country
                </Typography>
                <Typography variant="h6" color="#696969">
                  DoB
                </Typography>
                <Typography variant="h6" color="#696969">
                  Email
                </Typography>
                <Typography variant="h6" color="#696969">
                  Phone
                </Typography>
              </ThemeProvider>
            </Box>

            <Box
              sx={{
                fontWeight: '500',
                fontFamily: 'roboto',
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{
                    pt: '15px',
                  }}
                >
                  London
                </Typography>
                <Typography variant="h6" color="initial">
                  Great Britain
                </Typography>
                <Typography variant="h6" color="initial">
                  14.04.1999
                </Typography>
                <Typography variant="h6" color="initial">
                  harrypotter@gmail.comsdfsdfsd
                </Typography>
                <Typography variant="h6" color="initial">
                  +380969124049
                </Typography>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
