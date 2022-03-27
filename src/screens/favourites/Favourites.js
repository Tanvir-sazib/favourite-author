import React from 'react';
import ListItem from '../../components/listItem/ListItem'

const Favourites = (favourites) => {
    console.log(favourites.favourites)
    return (
      <div className="row justify-content-center d-flex">
        {favourites.favourites.map((fav) => {
          return <ListItem author={fav} key={fav._id} favourites={favourites.favourites} />;
        })}
      </div>
    );
};

export default Favourites;