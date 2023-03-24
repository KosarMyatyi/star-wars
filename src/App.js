import './App.css';
import { Home } from './components/Home/Home.jsx';
import { Characters } from './components/Characters/Characters';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <div className='appContainer'>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
