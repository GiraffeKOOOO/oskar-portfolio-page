// libraries
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// providers
// files
import Home from './pages/Home.jsx';
// styles
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
