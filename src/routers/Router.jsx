import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Photo from '../pages/Photo';
import Photodetails from '../pages/Photodetails';



export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Photo />,
    },
    {
      path: "/:id",
      element: <Photodetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}