import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Register from "./pages/Register/Register";
import PasswordReset from "./pages/PasswordReset";
import Reels from "./pages/UserHomeLayout/LefMenu/LeftMenuSections/Reels/Reels";
import UserHomeLayout from "./pages/UserHomeLayout";
import UserProfile from "./pages/UserHomeLayout/LefMenu/LeftMenuSections/UserProfile";
import UserHome from "./pages/UserHomeLayout/LefMenu/LeftMenuSections/UserHome/UserHome";
import Discover from "./pages/UserHomeLayout/LefMenu/LeftMenuSections/Discover/Discover";


function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/passwordreset",
      element: <PasswordReset />,
    },
    {
      path: "/user-home-layout",
      element: <UserHomeLayout />,
      children: [
        {
          path:'userHome',
          element:<UserHome />
        },       
        {
          path: "discover",
          element:<Discover />
        },
        {
          path:'reels',
          element:<Reels />
        },
        {
          path:'userprofile',
          element:<UserProfile />
        }
      ],
    },
  ]);
}

export default Router;
