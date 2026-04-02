import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
const Applayout = () =>{
    return ( <div className="app"> 
    <Header/>
    <Outlet/>
    </div> 
   )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                index:true,
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
            path:"/contact",
            element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
