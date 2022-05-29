import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import "../styles/homePage.css"

const IMAGES = ["/image3.jpg", "/image3.jpg", "/image3.jpg"]

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

    return (
        <div>
            <img class="yimagetop" src={IMAGES[index]} />
            {/* <img class="yimage" src="imageover.jpg" /> */}
            <div>
                <h class="ywedo">העשיה שלנו </h>
            </div>
            {/* שורה ראשונה */}
            <div class="row">
                <div class="column">
                    {/* תמונה ראשונה  */}
                    <div class="column flip-box">

                        <div class="flip-box  flip-box-inner flip-box-front">

                            <img src="image2.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>
                </div>
                {/* תמונה שניה */}
                <div class="column">
                    <div class="column flip-box">

                        <div class="flip-box  flip-box-inner flip-box-front">

                            <img src="image2.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>

                </div>
                <div class="column">
                    {/* תמונה שלישית */}
                    <div class="column flip-box">

                        <div class="flip-box  flip-box-inner flip-box-front">

                            <img src="image2.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>
                </div>
            </div>


           
            {/* שורה שניה */}
            <div class="row">
                <div class="column">
                    {/* תמונה ראשונה  */}
                    <div class="column flip-box">

                        <div class="flip-box  flip-box-inner flip-box-front">

                            <img src="image1.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>
                </div>
                {/* תמונה שניה */}
                <div class="column">
                    <div class="column flip-box">

                        <div class="flip-box  flip-box-inner flip-box-front">

                            <img src="image2.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>

                </div>
                <div class="column">
                    {/* תמונה שלישית */}
                    <div class="column flip-box">

                        <div class="flip-box  flip-box-inner flip-box-front">

                            <img src="image2.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>
                </div>
            </div>
             </div>
       

    )
}