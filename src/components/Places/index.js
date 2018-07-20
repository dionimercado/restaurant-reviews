import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const Places = ({ places }) => (
  <ul className="list-group">
    <li className="list-group-item active" style={{ borderRadius: "0" }}>
      <h5>Restaurants</h5>
    </li>
    {places.map(place => (
      <li key={place.id} className="list-group-item">
        <Link to={`/place/${place.place_id}`}>{place.name}</Link>
        <Rating rating={place.rating} />
      </li>
    ))}
  </ul>
);

export default Places;
