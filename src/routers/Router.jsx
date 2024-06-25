import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Photo from '../pages/Photo';
import Photodetails from '../pages/Photodetails';
import AddPhoto from '../pages/Addphoto';
import Editphoto from '../pages/Editphoto';




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
      {
        path: "/edit",
        element: <Editphoto />,
      },
  ]);

  return <RouterProvider router={router} />;
}