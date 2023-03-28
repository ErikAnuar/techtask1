import React, { Suspense, lazy } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Preloader from "./pages/Preloader";

const MainPage = lazy(() => import("./App1"));
const Gpark = lazy(() => import("./pages/Gpark"));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/g-park" element={<Gpark />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
