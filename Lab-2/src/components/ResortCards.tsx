import type { ResortListing } from "../data/data";
export default function ResortCards({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
     const ratingColor = (rating >= 4) ? "green" : "red";
    return (
        <div className = "ResortCards">
            <img src= {pic} alt="" width="150px" />
            <p style={{fontSize: "0.9rem", fontWeight: "600", color: "#ffff"}}>{country}</p>
            <p style={{ fontStyle: "italic", color: "gray", fontSize: "0.9rem" }}>{location}</p>
            <p  style={{color: ratingColor}}>{rating}★</p>
            <p style={{color: "gray" }}>${price}/night</p>
        </div>
    );
}