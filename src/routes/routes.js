import React, { Suspense } from "react";
import PageRoutes from "./PageRoutes";
import { Route, Routes } from "react-router-dom";
import Spinner from "../components/Spinner";

const routes = () => {
  // mapping over the pageRoutes file and for each object in data, returning a route

  const pageRoutes = PageRoutes.map(({ path, element }, index) => {
    return <Route exact key={index} path={path} element={element} />;
  });

  return (
    <div>
      {/* suspends a component(‘s) being render until a certain condition has been met, and will display a fallback option. */}
      <Suspense fallback={<Spinner />}>
        <Routes>{pageRoutes}</Routes>
      </Suspense>
    </div>
  );
};

export default routes;
