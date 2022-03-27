import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favourites from '../screens/favourites/Favourites.js';

const Authors = lazy(() => import("../screens/Authors/Authors.js"));

const HandleRoutes = ({
  page,
  setPage,
  authors,
  lazyLoading,
  favourites,
  setFavourites,
  
}) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Authors
                  page={page}
                  setPage={setPage}
                  authors={authors}
                  lazyLoading={lazyLoading}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              </Suspense>
            }
          />
          <Route
            path="/authors"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Authors
                  page={page}
                  setPage={setPage}
                  authors={authors}
                  lazyLoading={lazyLoading}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              </Suspense>
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default HandleRoutes;