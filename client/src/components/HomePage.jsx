// import { Icon } from "@material-ui/core";
import { Icon } from '@iconify/react'
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import CountUp from 'react-countup';

import "../styles/homePage.css"

const IMAGES = ["/image3.jpg", "/image30.jpg", "/image15.jpg"]
const IMAGES2 = ["/image3.jpg", "/image30.jpg", "/image15.jpg"]

export const HomePage = () => {

    const [index, setIndex] = useState(0);
    const [loopImages, setLoopImages] = useState([...IMAGES2]);

    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(handleInterval, 3000);
        return () => clearInterval(interval.current)
    }, [])

    const handleInterval = () => {
        displayNextImage();
        // switchImages();
    }

    const displayNextImage = () => {
        setIndex(index => (index === IMAGES.length - 1) ? 0 : index + 1);
    }

    const switchImages = () => {
        setLoopImages(prev => {
            console.log(prev)
            for (let index = 0; index <prev.length -1;index++) {
                if(index==0){
                    prev[index]=prev[prev.length-1];
                }
                else{
                    prev[index]=prev[index+1];
                }
            }
            return [...prev] ;
        })
       
    }


    return (

        <div>
            <img class="yimagetop" src={IMAGES[index]} />
            <div className="slideshowDots">
                {IMAGES.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
            <div>
                <h class="ywedo">העשיה שלנו </h>

            </div>
            <div className="y_all_center_img">
                {/* שורה ראשונה */}

                <div className="row">
                    {/* תמונה ראשונה  */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image1.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>שולחנות שבת</h2>
                                    <p>שולחנות שבת בשערי צדק</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* תמונה שניה */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image13.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>משמחים</h2>
                                    <p>המתנדבים שלנו פה כדי לשמח אתכם</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        {/* תמונה שלישית */}
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image20.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>עגלות שמחה</h2>
                                    <p>העגלות שלנו באים לשמח מבוגרים</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* שורה שניה */}
                <div className="row">
                    <div className="column">
                        {/* תמונה ראשונה  */}
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image19.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>שולחנות שבת</h2>
                                    <p>השולחנות שלנו באים להעניק לכם את הטוב ביותר</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* תמונה שניה */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image13.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>לכתוב משו</h2>
                                    <p>להוסיף תמונה  שמתאימה</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="column">
                        {/* תמונה שלישית */}
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image4.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>אוכל לשבת</h2>
                                    <p>אנחנו תמיד פה להעניק לכם את האוכל הכי טוב כדי שתחוו את השבת בשמחה </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* שורה שלישית */}
                <div className="row">
                    <div className="column">
                        {/* תמונה ראשונה  */}
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image1.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>לכתוב משו</h2>
                                    <p>להוסיף תמונה  שמתאימה</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* תמונה שניה */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image1.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>לכתוב משו</h2>
                                    <p>להוסיף תמונה  שמתאימה</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* תמונה שלישית */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image1.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>לכתוב משו</h2>
                                    <p>להוסיף תמונה  שמתאימה</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="yhomeloge" src="yhomeloge.png"></img>

            </div>

            <div className="y_navber_num">
                <div>

                    <a className="y_word">בתי חולים </a>
                    <a className="y_word">מתנדבים </a>
                    <a className="y_word">ימים בשנה </a>
                    <a className="y_word">מנות בשבוע</a>
                </div>
                <div>
                    < CountUp className="y_nav_num" end={2400} duration={5} />
                    < CountUp className="y_nav_num" end={365} duration={5} />
                    < CountUp className="y_nav_num" end={1500} duration={5} />
                    < CountUp className="y_nav_num" end={7} duration={5} />

                </div>

            </div>
            <div>
                <a className="y_about">העשיה שלנו </a>
            </div>
            {/* תמונות בלולאה עוברות */}
            <div className="y_img_loop_index">
                <div class="image-container ">
                    <div class="image-wrapper">
                        {loopImages.map((src) => (
                            <div key={src} className=" y_img_loop">
                                <img src={src}  />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* זה הפס בסוף העמוד  */}
            <div className="y_under_Line ">

                <br /> <br /> <br />
                <a href="https://www.facebook.com/dvd4756/" className="icon_size" ><Icon icon="bi:facebook" color="#ED2230" width="34" height="34" /></a>
                <a href="https://instagram.com/osimsameach?igshid=YTM0ZjI4ZDI=/" className="icon_size"><Icon icon="akar-icons:instagram-fill" color="#ED2230" width="34" height="34" /></a>
                <a href="https://youtube.com/channel/UCnVhKrm6CQ_PoSFwg1fEIYQ" class="icon_size"><Icon icon="akar-icons:youtube-fill" color="#ED2230" width="34" height="34" /></a>
                <br /> <br /> <br />


            </div>

        </div>


    )
}