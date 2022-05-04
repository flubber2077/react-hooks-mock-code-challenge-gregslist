import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, searchValue, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.filter((listing) => {
          if(searchValue == ""){
            return true
          } else if (listing.description.toLowerCase().includes(searchValue.toLowerCase())) {
            return listing
          }
        }).map((listing) => {
          return (
            <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
