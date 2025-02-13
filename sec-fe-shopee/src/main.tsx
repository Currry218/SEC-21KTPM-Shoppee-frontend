import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { LoginPage } from './page/login.tsx';
import { HomePage } from './page/home.tsx';
import { SearchProductPage } from './page/search_product.tsx';
import { DetailProductPage } from './page/detail_product.tsx';
import { CartPage } from './page/cart.tsx';

import { UserPage } from './page/user.tsx';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/search",
      element: <SearchProductPage />,
    },
    {
      path: "/detail-product",
      element: <DetailProductPage />,
    },
    {
      path: "/user",
      element: <UserPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    }
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
