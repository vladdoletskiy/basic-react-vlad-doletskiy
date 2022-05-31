import { Box, Avatar, Container, Typography } from '../../shared/ui/elements/components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../shared/ui/theme/theme-config';

export const ProfilePage: React.FunctionComponent = () => {
  return (
    <Container maxWidth="md">
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
            backgroundColor: 'primary.light',
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
            <Typography variant="subtitle1" color="initial">
              Wizard
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '10px',
                mb: '40px',
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
                    sx={{
                      pt: '15px',
                    }}
                  >
                    City
                  </Typography>
                  <Typography variant="h6">Country</Typography>
                  <Typography variant="h6">DoB</Typography>
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="h6">Phone</Typography>
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
                    harrypotter@gmail.coms
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
    </Container>
  );
};