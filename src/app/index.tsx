// С хедером депкруз выает ошибку. игрался с путями импортами как только было возможно. 
// Но он не хочет принимать виджет

import { Header } from '../widgets/header';
import './index.scss';
// я не совсем понял про абсолютный путь - тут никакой другой просто не работает. 
// Прошу указать буквально что тут прописать надо. Лучше 1 раз увидеть) 
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
