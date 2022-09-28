import { Routes, Route } from "react-router-dom";
import LatestNews from "../pages/LatestNews";
import Business from "../pages/Business";
import Education from "../pages/Education";
import Entertainment from "../pages/Entertainment";
import Explainer from "../pages/Explainer";
import Ezmail from "../pages/Ezmail";
import India from "../pages/India";
import IndiaVsAus from "../pages/IndiaVsAus";
import Lifestyle from "../pages/Lifestyle";
import Photos from "../pages/Photos";
import Sports from "../pages/Sports";
import Videos from "../pages/Videos";
import Viral from "../pages/Viral";
import World from "../pages/World";
let route = [
  { path: "/latestnews", element: <LatestNews /> },
  {
    path: "/business",
    element: <Business />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/entertainment",
    element: <Entertainment />
  },
  {
    path: "/explainer",
    element: <Explainer />
  },
  {
    path: "/india",
    element: <India />
  },
  {
    path: "/sports",
    element: <Sports />
  },
  {
    path: "/videos",
    element: <Videos />
  },
  {
    path: "/ezmail",
    element: <Ezmail />
  },
  {
    path: "/viral",
    element: <Viral />
  },
  {
    path: "/latestnews",
    element: <LatestNews />
  },
  {
    path: "/indvsaus",
    element: <IndiaVsAus />
  },
  {
    path: "/world",
    element: <World />
  },
  {
    path: "/lifestyle",
    element: <Lifestyle />
  },
  {
    path: "/photos",
    element: <Photos />
  }
];

export default function AllRoutes() {
  return (
    <>
      <Routes>
        {route.map((el) => {
          return <Route key={el.path} path={el.path} element={el.element} />;
        })}
      </Routes>
    </>
  );
}
