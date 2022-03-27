import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ListItem = ({ author, favourites, setFavourites }) => {
 
  const [removeFav,setRemoveFav]=useState(false);
  useEffect(() => {
    favourites.forEach(fav=>{
      if(fav._id===author._id){
        setRemoveFav(true);
      }
    })
  }, []);
 
  const handleFavourites=()=>{
    if(favourites.includes(author)){
      console.log('already in fav list')
    }else{
      setFavourites([...favourites, author]);
      localStorage.setItem("Favourites", JSON.stringify(favourites));
      setRemoveFav(true);
    }
  }
  const handleRemoveFav=()=>{
    const newFav = favourites.filter((fav)=>fav._id!==author._id);
    localStorage.setItem("Favourites", JSON.stringify(newFav));
    setRemoveFav(false);
    
      window.location.reload();
  }
  
  return (
    <div className=" col-lg-3 my-3">
      <Card border="primary" style={{ width: "100%", height: "100%" }}>
        <Card.Body>
          <Card.Title>{author.name}</Card.Title>
          <Card.Link target="_blank" href={author.link}>
            Bio Link
          </Card.Link>
          {removeFav ? (
            <b
              className="ms-3 text-danger"
              style={{ cursor: "pointer" }}
              onClick={handleRemoveFav}
            >
              Remove from Favourites
            </b>
          ) : (
            <b
              className="ms-3 text-danger"
              style={{ cursor: "pointer" }}
              onClick={handleFavourites}
            >
              Add to Favourites
            </b>
          )}
          <Card.Text>{author.bio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListItem;