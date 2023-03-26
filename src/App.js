import { HomePage } from '../src/pages//HomePage/HomePage';
import { CharactersPage } from '../src/pages/CharactersPage/CharactersPage';
import { ErrorPage } from '../src/pages/ErrorPage/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/characters' element={<CharactersPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
