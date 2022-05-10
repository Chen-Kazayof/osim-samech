import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import "../styles/homePage.css"

const IMAGES = ["/image1.jpg", "/image2.jpg", "/image3.jpg"]

export const HomePage = () => {

    const [index, setIndex] = useState(0);

    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(displayNextImage, 3000); 
        return () => clearInterval(interval.current)
    }, [])

    const displayNextImage = () => {
        setIndex(index => (index === IMAGES.length - 1) ? 0 : index + 1);
    }

    // function displayPreviousImage() {
    //     x = (x <= 0) ? images.length - 1 : x - 1;
    //     document.getElementById("img").src = images[x];
    // }

    return (
        <div>
           homePage
           <img src={IMAGES[index]} />
        </div>
    )
}