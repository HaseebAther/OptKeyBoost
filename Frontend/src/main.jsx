import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import {
  PublicLayout, AppLayout,
  Home, Login, Signup, Dashboard, TypingTest,History,
  AuthLayout
} from "./index";



const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
     
    ]
  },  
  
  {
    element: <AuthLayout />,
    children: [
    { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
     
    ]
  },


  {
    element: <AppLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/test", element: <TypingTest /> },
       { path: "/history", element: <History /> },
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
     </StrictMode>,
)
