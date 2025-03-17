import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import Server from "../Server/Server";

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
    ],
  },
]);

export default router;
