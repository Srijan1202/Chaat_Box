import './App.css';
import React, { lazy, Suspense, useEffect,useState } from "react";
import Header from "./components/Header"
import Body from "./components/Body"
import{createBrowserRouter} from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import {Outlet} from "react-router-dom"
import RestaurantMenu from './components/RestaurantMenu';
import UserConstext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';



const Grocery =  lazy(()=>import("./components/Grocery"));

function App() {
  const [username, setusername] = useState("Srijan");
  useEffect(() => {
    const data = {
      name: "Srijan"
    };
    setusername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserConstext.Provider value={{loginfo:username, setusername}}>
<div>
  <Header/>

  <Outlet/>

</div>
</UserConstext.Provider>
  </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>this is the loading page</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }

    ],
    errorElement: <Error/>
  }
]);

export default appRouter;
