import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Set from "./components/Set/Set";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Set",
        element: "",
        children: [
          {
            path: "",
            element: <Set />,
          },
        ],
      },
    ],
  },
]);

export default routes;
