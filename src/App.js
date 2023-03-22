import './App.css';
import { Home } from './components/Home/Home.jsx';
import { Header } from './components/Header/Header';
import { Characters } from './components/Characters/Characters';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/home/',
    element: <Home />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/characters/',
    element: <Characters />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <div className="appContainer">
      <Header />
      <hr className="divider" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
