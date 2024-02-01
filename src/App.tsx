import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import HotelsPage from "./pages/HotelsPage";
import ResultsPage from "./pages/ResultsPage";
import LandingPage from "./pages/LandingPage";
import FoodwagonByThemeWagon from "./pages/FoodwagonByThemeWagon";
import Slide169 from "./pages/Slide169";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hotels-page":
        title = "";
        metaDescription = "";
        break;
      case "/results-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/201-foodwagon-by-themewagon":
        title = "";
        metaDescription = "";
        break;
      case "/203-slide-169-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hotels-page" element={<HotelsPage />} />
      <Route path="/results-page" element={<ResultsPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route
        path="/201-foodwagon-by-themewagon"
        element={<FoodwagonByThemeWagon />}
      />
      <Route path="/203-slide-169-1" element={<Slide169 />} />
    </Routes>
  );
}
export default App;
