import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import{createBrowserRouter} from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import {Outlet} from "react-router-dom"

const Footer=()=>{
  return(
    <div className="footer">

    </div>
  );
};

function App() {
  return (
<div>
  <Header/>
  
  <Outlet/>

  <Footer/>

</div>
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
      }
    ],
    errorElement: <Error/>
  }
]);

export default appRouter;
