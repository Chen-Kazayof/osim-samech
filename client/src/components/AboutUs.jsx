import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import "../styles/homePage.css"

const IMAGES = ["/image1.jpg", "/image2.jpg", "/image3.jpg"]

export const AboutUs = () => {

    const [index, setIndex] = useState(0);

    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(displayNextImage, 3000); 
        return () => clearInterval(interval.current)
    }, [])

    const displayNextImage = () => {
        setIndex(index => (index === IMAGES.length - 1) ? 0 : index + 1);
    }

    return (
        <div>
            
           <img src={IMAGES[index]} />
           <div>
            <h1>העשיה שלנו </h1>
            </div>
        </div>
    )
}