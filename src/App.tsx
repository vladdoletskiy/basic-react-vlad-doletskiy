import Form from './Form';
import Header from './Header';
import Profile from './Profile';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Profile />
        {/* <Form /> */}
      </Container>
    </>
  );
}

export default App;
