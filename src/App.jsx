import React, { Suspense, lazy } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Preloader from "./pages/Preloader";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

const MainPage = lazy(() => import("./App1"));
const Gpark = lazy(() => import("./pages/Gpark"));
const Jetisu = lazy(() => import("./pages/Jetisu"));
const Marketing = lazy(() => import("./pages/Marketing"));
const Ad = lazy(() => import("./pages/Ad"));
const Production = lazy(() => import("./pages/Production"));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/g-park"
            element={
              <Gpark>
                <Navbar
                  className="absolute bg-white"
                  button={
                    <Button className="rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5">
                      Получить консультацию
                    </Button>
                  }
                />
              </Gpark>
            }
          />
          <Route
            path="/jetisu"
            element={
              <Jetisu>
                <Navbar
                  className="absolute  bg-white"
                  button={
                    <Button
                      className={
                        " rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5"
                      }
                    >
                      оформить заявку
                    </Button>
                  }
                />
              </Jetisu>
            }
          />
          <Route path="/marketing" element={<Marketing />} />
          <Route
            path="/ad"
            element={
              <Ad>
                <Navbar
                  className="absolute z-50 bg-white"
                  button={
                    <Button
                      className={
                        " w-[147px] h-[34px] rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5 ml-[0px] mr-[245px]  "
                      }
                    >
                      оформить заявку
                    </Button>
                  }
                />
              </Ad>
            }
          />
          <Route path="/production" element={<Production />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
