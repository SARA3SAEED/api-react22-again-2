import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Photo from '../pages/Photo';
import Photodetails from '../pages/Photodetails';
import AddPhoto from '../pages/Addphoto';



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
    {
        path: "/add",
        element: <AddPhoto />,
      },
  ]);

  return <RouterProvider router={router} />;
}