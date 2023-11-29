import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "../pages/common/HomePage.jsx"
import CommonLayout from "../layout/common/CommonLayout.jsx"
import ProductPage from "../pages/common/ProductPage.jsx"
import BasketPage from "../pages/common/BasketPage.jsx"

const router = createBrowserRouter([

  
     //COMMON ROUTES

    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
            path :"/products/:id",
            element : <ProductPage />
          },
          {
            path: "/cart",
            element: <BasketPage />
          }
        
            
            
            
        ],
    },
  
])

export default function AppRouter() {
    return <RouterProvider router={router} />
  }