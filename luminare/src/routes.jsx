import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Follow from "./pages/follow/Follow";
import Games from "./pages/games/Games";
import Support from "./pages/support/Support";

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
      },
      {
        path: "/suporte",
        element: <Support />
      }
    ]
  }
]);

export default router;
