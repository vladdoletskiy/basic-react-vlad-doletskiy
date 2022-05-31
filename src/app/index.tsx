import { Header } from '../widgets/header';
import './index.scss';
import { Routing } from '../pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
