import { lazy } from "react";

// added react lazy here so we can divide our code or bundle size into smaller chunks and while loading the page we can load most important chunk first and after that all other chunks lazily loaded.

const NotFound = lazy(() => import("../pages/errors/NotFound"));
const CreateFlashcard = lazy(() => import("../pages/home/CreateFlashcard"));
const FlashcardDetails = lazy(() => import("../pages/FlashcardDetails"));
const MyFlashcard = lazy(() => import("../pages/MyFlashcard"));

//array of objects for different routes for different flashcard pages.

const PageRoutes = [
  {
    path: "/",
    element: <CreateFlashcard />,
  },
  {
    path: "/dashboard",
    element: <MyFlashcard />,
  },
  {
    path: "dashboard/:id",
    element: <FlashcardDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default PageRoutes;
