import {
  Box,
  Container,
  Typography,
  MenuItem,
  Button,
  Menu,
  IconButton,
  Toolbar,
  AppBar,
} from '../../shared/ui/elements/components';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const navToProfile = (): void => {
    handleCloseNavMenu();
    navigate('/profile');
  };
  const navToEdit = (): void => {
    handleCloseNavMenu();
    navigate('/edit');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.dark' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Basic React
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setAnchorElNav(event.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography onClick={navToProfile}>PROFILE</Typography>
                <Typography onClick={navToEdit}>EDIT PROFILE</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Basic React
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={navToProfile}
              sx={{ my: 2, mb: 1.6, color: 'white', display: 'block' }}
            >
              Profile
            </Button>
            <Button onClick={navToEdit} sx={{ my: 2, mb: 1.6, color: 'white', display: 'block' }}>
              Edit Profile
            </Button>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
