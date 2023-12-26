import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Football from './Components/Football/Football';
import Padel from './Components/Padel/Padel';
import Contact from './Components/Contact/Contact';
import Rivals from './Components/Rivals/Rivals';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserContextProvider from './Components/Context/UserContext';
import Profile from './Components/Profile/Profile';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';



let routers = createHashRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'football',element:<Football/>},
    {path:'padel',element:<Padel/>},
    {path:'contact',element:<Contact/>},
    {path:'rivals',element:<Rivals/>},
    {path:'login',element:<Login/>},
    {path:'register',element:<Register/>},
    {path:'profile',element:<ProtectedRoute><Profile/></ProtectedRoute>},
    {path:'*',element:<NotFound/>}
  ]}
])



function App() {
 
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
