import Form from './Form';
import Header from './Header';
import Profile from './Profile';
import Container from '@mui/material/Container';
import Home from './Home';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        {/* <Profile /> */}
        {/* <Form /> */}
        <Home/>
      </Container>
    </>
  );
}

export default App;
