import React, { useState } from "react";

function ListingCard({ listing }) {
  const { key, description, image, location } = listing;

  function handleFavorite(e) {
    
  }

  return (
    <li className="card" key={key} >
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active" onClick={handleFavorite} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
