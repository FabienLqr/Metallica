import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
//import pages
import Home from "./pages/Home";
import KillemAll from "./pages/KillemAll";
import RideTheLightning from "./pages/RidetheLightning";
import MasterofPuppets from "./pages/MasterofPuppets";
import Justice from "./pages/Justice";
import BlackAlbum from "./pages/BlackAlbum";
import Load from "./pages/Load";
import Reload from "./pages/Reload";
import StAnger from "./pages/StAnger";
import Death from "./pages/Death";
import Hardwired from "./pages/Hardwired";
import Seasons from "./pages/Seasons";
import Sm from "./pages/Sm";
import SmTwo from "./pages/SmTwo";
import Garage from "./pages/Garage";
import Lulu from "./pages/Lulu";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/kill_em_all",
        element: <KillemAll />,
      },
      {
        path: "/ride_the_lightning",
        element: <RideTheLightning />,
      },
      {
        path: "/master_of_puppets",
        element: <MasterofPuppets />,
      },
      {
        path: "/justice_for_all",
        element: <Justice />,
      },
      {
        path: "/black_album",
        element: <BlackAlbum />,
      },
      {
        path: "/load",
        element: <Load />,
      },
      {
        path: "/reload",
        element: <Reload />,
      },
      {
        path: "/st_anger",
        element: <StAnger />,
      },
      {
        path: "/death_magnetic",
        element: <Death />,
      },
      {
        path: "/hardwired_to_self_destruct",
        element: <Hardwired />,
      },
      {
        path: "/72_seasons",
        element: <Seasons />,
      },
      {
        path: "/sm",
        element: <Sm />,
      },
      {
        path: "/sm2",
        element: <SmTwo />,
      },
      {
        path: "/garage",
        element: <Garage />,
      },
      {
        path: "/lulu",
        element: <Lulu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
