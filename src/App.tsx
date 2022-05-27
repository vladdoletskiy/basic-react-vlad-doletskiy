import Form from './Form';
import Header from './Header';
import Profile from './Profile';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
