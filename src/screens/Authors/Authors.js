import React from 'react';
import ListItem from '../../components/listItem/ListItem.js';

const Authors = ({
  page,
  setPage,
  authors,
  lazyLoading,
  favourites,
  setFavourites,
 
}) => {
  const handleNextPageChange = () => {
    setPage(page + 10);
  };
  const handlePreviousPageChange = () => {
    setPage(page - 10);
  };
  return (
    <div className="">
      <div className="row justify-content-center d-flex">
        {lazyLoading === false &&
          authors.results.map((author) => {
            return (
              <ListItem
                author={author}
                favourites={favourites}
                setFavourites={setFavourites}
                key={author._id}
              />
            );
          })}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={handlePreviousPageChange}>
          previous
        </button>
        {lazyLoading === false && (
          <div>
            <span>Page No: </span>
            <b>{authors.page}</b>
          </div>
        )}
        <button className="btn btn-primary" onClick={handleNextPageChange}>
          next
        </button>
      </div>
    </div>
  );
};

export default Authors;