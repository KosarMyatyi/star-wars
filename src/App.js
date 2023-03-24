import './App.css';
import { Home } from './components/Home/Home.jsx';
import { Characters } from './components/Characters/Characters';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';

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
      <Layout />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
