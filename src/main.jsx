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

//import musics KEA
import Seek from "./components/songs/killemall/seek";
import Militia from "./components/songs/killemall/militia";
import Motorbreath from "./components/songs/killemall/motorbreath.jsx";
import Phantom from "./components/songs/killemall/phantom.jsx";
import Remorse from "./components/songs/killemall/remorse.jsx";
import Horsemen from "./components/songs/killemall/horsemen.jsx";
import Light from "./components/songs/killemall/light.jsx";
import Jump from "./components/songs/killemall/jump.jsx";
import Whiplash from "./components/songs/killemall/whiplash.jsx";
import Anesthesia from "./components/songs/killemall/anesthesia.jsx";

//import musics RTL
import Fire from "./components/songs/ridethelightning/fire.jsx";
import Lightning from "./components/songs/ridethelightning/lightnin.jsx";
import Bell from "./components/songs/ridethelightning/bell.jsx";
import Fade from "./components/songs/ridethelightning/fade.jsx";
import Trapped from "./components/songs/ridethelightning/trapped.jsx";
import Escape from "./components/songs/ridethelightning/escape.jsx";
import Creeping from "./components/songs/ridethelightning/creeping.jsx";
import Ktulu from "./components/songs/ridethelightning/ktulu.jsx";

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
        children: [
          { path: "/kill_em_all/seek&destroy", element: <Seek /> },
          { path: "/kill_em_all/metal_militia", element: <Militia /> },
          { path: "/kill_em_all/motorbreath", element: <Motorbreath /> },
          { path: "/kill_em_all/phantom_lord", element: <Phantom /> },
          { path: "/kill_em_all/no_remorse", element: <Remorse /> },
          { path: "/kill_em_all/the_four_horsemen", element: <Horsemen /> },
          { path: "/kill_em_all/hit_the_light", element: <Light /> },
          { path: "/kill_em_all/jump_in_the_fire", element: <Jump /> },
          { path: "/kill_em_all/whiplash", element: <Whiplash /> },
          { path: "/kill_em_all/anesthesia", element: <Anesthesia /> },
        ],
      },
      {
        path: "/ride_the_lightning",
        element: <RideTheLightning />,
        children: [
          { path: "/ride_the_lightning/fight_fire_with_fire", element: <Fire />},
          { path: "/ride_the_lightning/ride_the_lightning", element: <Lightning />},
          { path: "/ride_the_lightning/for_whom_the_bell_tolls", elelment: <Bell />},
          { path: "/ride_the_lightning/fade_to_black", element: <Fade />},
          { path: "/ride_the_lightning/trapped_under_ice", element: <Trapped />},
          { path: "/ride_the_lightning/escape", element: <Escape />},
          { path: "/ride_the_lightning/creeping_death", element: <Creeping />},
          { path: "/ride_the_lightning/the_call_of_ktulu", element: <Ktulu />},
        ]
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
