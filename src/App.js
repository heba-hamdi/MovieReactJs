
import './App.css';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import TV from './Components/TV/TV';
import People from './Components/People/People';
import About from './Components/About/About';
import RootLayout from './Layouts/RootLayout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import AuthLayout from './Layouts/AuthLayout';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
 
  let routes=createBrowserRouter([
    {path:'/', element:<RootLayout/>, children:[
      {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'home', element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'movies', element:<ProtectedRoute><Movies/></ProtectedRoute>},
      {path:'tv', element:<ProtectedRoute><TV/></ProtectedRoute>},
      {path:'people', element:<ProtectedRoute><People/></ProtectedRoute>},
      {path:'about', element:<ProtectedRoute><About/></ProtectedRoute>},
      {path:'details/:id', element:<ProtectedRoute><ItemDetails/></ProtectedRoute>},
      {path:'*', element:<><h1>404</h1><h2>Page Not Found</h2></>}
    ]},
    {path:'/', element:<AuthLayout/>, children:[
      {index:true, element:<SignIn/>},
      {path:'/signin', element:<SignIn/>},
      {path:'/signup', element:<SignUp/>},
    ]},
    ])

  return (
    <>
    <RouterProvider router={routes}/>
    

    </>
  );
}

export default App;
