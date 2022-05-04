import React, {useState} from "react";

function ListingCard({listing, onDelete}) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavoriteClick(){
    setIsFavorite(!isFavorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${listing.id}` ,{
      method: "DELETE"
  })
  .then(r => r.json())
  .then(() => onDelete(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
