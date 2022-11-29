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
import AllSellers from './Components/Dashboard/AllSellers/AllSellers';
import AllBuyers from './Components/Dashboard/AllBuyers/AllBuyers'
import ReportedItems from './Components/Dashboard/ReportedItems/ReportedItems'
import AddProducts from './Components/Dashboard/AddProducts/AddProducts'
import MyProducts from './Components/Dashboard/MyProducts/MyProducts'
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/catagories/:id',
          loader: ({ params }) => fetch(` https://assaingment-twelve-server-nhn1998.vercel.app/catagories/${params.id}`),
          element: <PrivateRoute><CatagoryDetails></CatagoryDetails></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/*',
          element: <NotFoundPage></NotFoundPage>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <DashboardContent></DashboardContent>
        },
        {
          path: '/dashboard/allsellers',
          element: <AllSellers></AllSellers>
        },
        {
          path: '/dashboard/allbuyers',
          element: <AllBuyers></AllBuyers>
        },
        {
          path: '/dashboard/reportedItems',
          element: <ReportedItems></ReportedItems>
        },
        {
          path:'/dashboard/addProducts',
          element:<AddProducts></AddProducts>
        },
        {
          path:'/dashboard/myProducts',
          element:<MyProducts></MyProducts>
        },
        {
          path:'/dashboard/myOrders',
          element:<MyOrders></MyOrders>
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
