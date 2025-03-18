import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import Server from "../Server/Server";
import Update from "../Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/server",
        element: <Server></Server>,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.id}`),
      },
    ],
  },
]);

export default router;
