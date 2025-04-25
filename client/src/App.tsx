
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import AppRouters from './router/AppRouters';

export default function MyApp() {
  console.log("Mock server started");
  return <RouterProvider router={AppRouters} />;
}

