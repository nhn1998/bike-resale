import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import CatagoryDetails from './Components/Home/Catagories/CatagoryDetails/CatagoryDetails';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignIn/SignIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blogs from './Components/Blogs/Blogs';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardContent from './Components/Dashboard/DashboardContent/DashboardContent';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/catagories/:id',
          loader:({params})=>fetch(` https://assaingment-twelve-server-nhn1998.vercel.app/catagories/${params.id}`),
          element:<PrivateRoute><CatagoryDetails></CatagoryDetails></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blogs></Blogs>
        },
        {
          path:'/*',
          element:<NotFoundPage></NotFoundPage>
        },
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
         path:'/dashboard',
         element:<DashboardContent></DashboardContent>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
