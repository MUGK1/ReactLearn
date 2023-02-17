import React from "react";

function Cards(props) {
  return (
    <div className="Container-Cards">
      <article className="CardsSplit">
        <img src={`${props.imageUrl}`} className="img-Cards" alt="imgabout" />
        <div className="about">
          <div className="place">
            <img
              src="./Location.png"
              className="locationSign"
              alt="locationpng"
            ></img>
            <p className="placeName">{props.location}</p>
            <a href={`${props.googleMapsUrl}`} className="MapLoc">
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="paragraphAbout">{props.description}</p>
        </div>
      </article>
    </div>
  );
}

export default Cards;
