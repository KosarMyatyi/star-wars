import './App.css';
import { Home } from './components/Home/Home.jsx';
import { Header } from './components/Header/Header';
import { Characters } from './components/Characters/Characters';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '*',
    element: <ErrorPage />
  },
])

function App() {
  return (
    <div className="appContainer">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
