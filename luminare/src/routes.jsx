import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Follow from "./pages/follow/Follow";
import Games from "./pages/games/Games";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/acompanhamento",
        element: <Follow />
      },
      {
        path: "/gamificacao",
        element: <Games />
      }
    ]
  }
]);

export default router;
