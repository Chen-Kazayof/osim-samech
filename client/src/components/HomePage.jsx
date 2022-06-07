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


    const imageWrapper = document.querySelector('.image-wrapper')
    const imageItems = document.querySelectorAll('.image-wrapper > *')
    const imageLength = imageItems.length
    const perView = 3
    let totalScroll = 0
    const delay = 2000

    // imageWrapper.style.setProperty('--per-view', perView)
    // for (let i = 0; i < perView; i++) {
    //     imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
    // }

    // let autoScroll = setInterval(scrolling, delay)

    // function scrolling() {
    //     totalScroll++
    //     if (totalScroll == imageLength + 1) {
    //         clearInterval(autoScroll)
    //         totalScroll = 1
    //         imageWrapper.style.transition = '0s'
    //         imageWrapper.style.left = '0'
    //         autoScroll = setInterval(scrolling, delay)
    //     }
    //     const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
    //     imageWrapper.style.left = `-${totalScroll * widthEl}px`
    //     imageWrapper.style.transition = '.3s'
    // }
    return (
        <div>
            <img class="yimagetop" src={IMAGES[index]} />
            {/* <img class="yimage" src="imageover.png" /> */}
            <div>
                <h class="ywedo">העשיה שלנו </h>

            </div>
            {/* שורה ראשונה */}
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

                            <img src="image1.jpg" />
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

                            <img src="image1.jpg" />
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

                            <img src="image1.jpg" />
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

                            <img src="image1.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>
                </div>
            </div>

            <img class="yhomeloge" src="yhomeloge.png"></img>

            {/* שורה שלישית */}
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

                            <img src="image1.jpg" />
                        </div>
                        <div class="flip-box-back">
                            <h2>עגלות משמחים</h2>
                            <p>מה שאתפ עושים לאנשים בעת עזרתכם</p>
                        </div>
                    </div>

                </div>
                {/* תמונה שלישית */}
                <div class="column">
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

            </div>
            <div>
                {/* <Link to="/AboutUs"><a class="yshabut">שולחן שבת</a> </Link> */}

                {/* <button class="yshabut">רישום לסעודות שבת</button> */}

            </div>

            <div className="y_navber_num">
                <div>
                    <a className="y_word">בתי חולים </a>
                    <a className="y_word">מתנדבים </a>
                    <a className="y_word">ימים בשנה </a>
                    <a className="y_word">מנות בשבוע</a>
                </div>
            </div>
            <div>
                <a className="y_about">העשיה שלנו </a>
            </div>
            {/* תמונות בלולאה עוברות */}
            <div className="y_img_loop_index">
                <div class="image-container ">
                    <div class="image-wrapper">
                        <div>
                            <img src="image2.jpg" className=" y_img_loop" alt="" /> </div>
                        <div>
                            <img src="image2.jpg" className=" y_img_loop" alt="" />  </div>
                        <div>
                            <img src="image2.jpg" className=" y_img_loop" alt="" />   </div>
                        <div>
                            <img src="image2.jpg" className=" y_img_loop" alt="" /> </div>
                        <div>
                            <img src="image2.jpg" className=" y_img_loop" alt="" />   </div>
                    </div>
                </div>
            </div>
            {/* זה הפס בסוף העמוד  */}
            <div className="y_under_Line "></div>

        </div>


    )
}