import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Follow from "./pages/follow/Follow";
import Games from "./pages/games/Games";
import Support from "./pages/support/Support";
import Chat from "./pages/chat/Chat";
import Message from "./pages/chat/Message";
import Calendar from "./pages/calendar/Calendar";
import Profile from "./pages/profile/Profile";

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
      },
      {
        path:  "/mensagens",
        element: <Chat />
      },
      {
        path: "/mensagens/anaprofessora",
        element: <Message />
      },
      {
        path: "/calendario",
        element: <Calendar />
      },
      {
        path: "/perfil",
        element: <Profile />
      }
    ]
  }
]);

export default router;
