import React from "react";
import { ColumnImages } from "./ColumnImages";
import IMAGES_ARRAY_LIST from "../assets/IMAGES_ARRAY_LIST";

function imageArrayFunction(array){
    return(
        <ColumnImages
        image1={array.image1}
        image2={array.image2}
        image3={array.image3}
        image4={array.image4}
        image5={array.image5}
        image6={array.image6}
        image7={array.image7}
        image8={array.image8}
        image9={array.image9}
        image10={array.image10}
      />
    )
}
export function Column() {
  return (
    <div className="column">
      {IMAGES_ARRAY_LIST.map(imageArrayFunction)}
    </div>
  );
}
