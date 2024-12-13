import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/header2';
import Body from './components/body2';
import Footer from './components/footer2';
import About from './components/about';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { Outlet,Link } from 'react-router-dom';



// let Head = ()=>{
//     return <>
//         <h1>This is heading of the react</h1>
//     </>
// }
// let Body = ()=>{
//     return <>
//         <h1>This is body</h1>
//     </>
// }
// let Footer = ()=>{
//     return <>
//         <h1>This is footer</h1>
//     </>
// }

let TotalArea = ()=>{
    return <>
        <Header />
        <Body />
        <Footer />
    </>
}

const RouteApp = createBrowserRouter([
    {
      path:"/",
      element:<TotalArea />,
      children:[
        
      ]
    },
    {
        path:"/about",
        element:<About />
    }
])



let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TotalArea />)