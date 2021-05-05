import React from "react";
import "./gallery-row-column.css";
export function ColumnImages(props) {
  return (
    <div className="column_images">
      <div className="img">
        <img src={props.image1} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image2} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image3} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image4} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image5} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image6} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image7} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image8} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image9} alt="wallpaper" />
      </div>
      <div className="img">
        <img src={props.image10} alt="wallpaper" />
      </div>
    </div>
  );
}
