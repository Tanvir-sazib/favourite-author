import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Routes } from "react-router-dom";

import HandleRoutes from "../../routes/HandleRoutes";
import Sidebar from "../../screens/sideBar/Sidebar";

function Home() {
    const favAuthors = JSON.parse(localStorage.getItem("Favourites")) || [];
    const [page, setPage] = useState(0);
    const [authors, setAuthors] = useState();
    const [lazyLoading, setLazyLoading] = useState(true);
    // const [favLoading, setFavloading] = useState(true);
    const [favourites, setFavourites] = useState(favAuthors);

    useEffect(() => {
      fetch(`https://api.quotable.io/authors?limit=10&skip=${page}`)
        .then((res) => res.json())
        .then((data) => {
          setAuthors(data);
          setLazyLoading(false);
        });
    }, [page]);

    //  useEffect(() => {
       
    //    setFavourites(favAuthors);
    //    setFavloading(false)
    //  }, []);
    console.log(favourites);
    
  return (
    <div className="d-lg-flex justify-content-center">
      <div className="px-5">
        <Sidebar />
      </div>
      <div>
        {lazyLoading ? (
          <Spinner variant="primary" />
        ) : (
          <HandleRoutes
            page={page}
            setPage={setPage}
            authors={authors}
            lazyLoading={lazyLoading}
            favourites={favourites}
            setFavourites={setFavourites}
            
          />
        )}
      </div>
    </div>
  );
}

export default Home;
