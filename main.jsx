import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Country from "./pages/Country"
import Contact from "./pages/Contact"
import ErrorPage from './pages/ErrorPage.jsx';
import App from './App.jsx'
import CountryDetails from './pages/CountryDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/About",
        element: <About />
      },
      {
        path:"/Country",
        element: <Country />
      },
      {
        path:"/Country/:name",
        element: <CountryDetails />
      },
      {
        path:"/Contact",
        element: <Contact />
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
