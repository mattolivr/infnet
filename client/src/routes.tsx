import { createBrowserRouter } from "react-router";
import BaseLayout from "./pages/layouts/base";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ExplorePage from "./pages/explore";
import SubjectPage from "./pages/subject";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "explore",
        Component: ExplorePage,
      },
      {
        path: "block/:blockId/subject/:subjectId",
        Component: SubjectPage,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
