import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ControlPanel from "./pages/ControlPanel";
import GasWater from "./components/GasWater/GasWater";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/dashboard",
    element: <ControlPanel />,
    children: [
      {
        path: "gaseagua",
        element: <GasWater />,
      }
    ],
  }
]);
export function App() {
  return (
    <RouterProvider router={router} />
  );
}
