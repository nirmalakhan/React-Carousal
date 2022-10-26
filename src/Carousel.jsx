	[				import React from "react";
import { useState} from "react";
import "./Images.css"


const Carousel=()=>{
const[images,setImages]=useState(["./images/carousel1.jpeg",
             "./images/carousel2.jpeg","./images/carousel3.jpeg",
             "./images/carousel4.jpeg","./images/carousel5.jpeg",
             "./images/carousel6.jpeg"]);

    const[currentImage,setCurrentImage]=useState(0);

    const prevImage=()=>{
        const resetBack = currentImage===0;

        const index = resetBack? images.length-1:currentImage-1;

        setCurrentImage(index);
}

const nextImage=()=>{
    const resetIndex=currentImage===images.length-1;
    const index=resetIndex?0:currentImage+1;
    setCurrentImage(index);
}

const activeImage=images.slice(
    currentImage,currentImage+6
);
  
const imageDisplay=activeImage.length<6?
[...activeImage,images.slice(0,6-activeImage.length)]:activeImage;

    return(
        <>
        <div>
            <button onClick={prevImage}>Prev</button>
            {imageDisplay.map((images,index)=>{
                console.log(images);
                return <div><img src={images} id="img"></img></div>
            })}
            <button onClick={nextImage}>Next</button>
        </div>
        
        </>

    )
}

export default Carousel;
