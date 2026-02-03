import { createBrowserRouter } from "react-router";
import BaseLayout from "./pages/layouts/base";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ExplorePage from "./pages/explore";
import SubjectPage from "./pages/subject";
import ErrorPage from "./pages/error";
import FullLayout from "./pages/layouts/full";
import MainLayout from "./pages/layouts/main";

const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        Component: FullLayout,
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
            path: "*",
            Component: ErrorPage,
          },
        ],
      },
      {
        Component: MainLayout,
        children: [
          {
            path: "blocks",
            Component: ExplorePage,
          },
          {
            path: "block/:blockId/subjects",
            Component: ExplorePage,
          },
          {
            path: "block/:blockId/subject/:subjectId",
            Component: SubjectPage,
          },
        ],
      },
    ],
  },
]);

export default router;
