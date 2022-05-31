import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';



export const EditProfileForm: React.FunctionComponent = () => {
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
            alignItems: 'center',
            flexDirection: 'column',
            width: 1,
            height: '550px',
            backgroundColor: '#e8eaf6',
            borderRadius: '33px',
          }}
        >
          <form>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: 1,
                mt: '10px',
              }}
            >
              <Typography variant="h4" color="initial">
                Edit Profile
              </Typography>
              <TextField
                sx={{
                  mb: '7px',
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                sx={{
                  mb: '7px',
                }}
                id="outlined-basic"
                label="City"
                variant="outlined"
              />
              <TextField
                sx={{
                  mb: '7px',
                }}
                id="outlined-basic"
                label="Country"
                variant="outlined"
              />
              <TextField
                sx={{
                  mb: '7px',
                }}
                id="outlined-basic"
                label="BoD"
                variant="outlined"
              />
              <TextField
                sx={{
                  mb: '7px',
                }}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                sx={{
                  mb: '7px',
                }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
              <Button
                sx={{
                  mb: '7px',
                }}
                variant="contained"
                component="label"
                color="primary"
              >
                {' '}
                <AddCircleOutlinedIcon /> Upload a file
                <input type="file" hidden />
              </Button>
              <Button
                sx={{
                  mb: '7px',
                }}
                variant="contained"
              >
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
