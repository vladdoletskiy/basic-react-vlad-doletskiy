import { Header } from '../widgets/header/header';
import './index.scss';
import { Routing } from '../pages/index';
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
