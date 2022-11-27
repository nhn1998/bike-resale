import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import CatagoryDetails from './Components/Home/Catagories/CatagoryDetails/CatagoryDetails';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignIn/SignIn';

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
          loaders:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`),
          element:<CatagoryDetails></CatagoryDetails>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
