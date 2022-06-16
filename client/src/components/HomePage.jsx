// import { Icon } from "@material-ui/core";
import { Icon } from '@iconify/react'
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import CountUp from 'react-countup';
import "../styles/homePage.css"

const IMAGES = ["/image3.jpg", "/image30.jpg", "/image3.jpg"]

export const HomePage = () => {

    const [index, setIndex] = useState(0);

    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(handleInterval, 3000);
        return () => clearInterval(interval.current)
    }, [])

    const handleInterval = () => {
        displayNextImage();
    }

    const displayNextImage = () => {
        setIndex(index => (index === IMAGES.length - 1) ? 0 : index + 1);
    }


    return (

        <div>
            <img className="yimagetop" src={IMAGES[index]} />
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
                <div className="ywedo">העשיה שלנו </div>
            </div>
            <div className="y_all_center_img">
                {/* שורה ראשונה */}

                <div className="row">
                    {/* תמונה ראשונה  */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="1_chaloka.jpg" alt="chaloka" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>חלוקיס</h2>
                                    <p>אנחנו שמחים להציג בפני הילדים בכל יום גלידות פופקורן או כל דבר שיגרום להם לשמוח  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* תמונה שניה */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image8.jpg" alt="caffe" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>קפה ומאפה</h2>
                                    <p>בכל יום המתנדבים שלנו פה כדי להעניק לחולים קפה ומאפה בכל מחלקות בית החולים</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        {/* תמונה שלישית */}
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="1_tipoach.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>טיפוח</h2>
                                    <p>המתנדבות שלנו מביאות לבית חולים מחלקת טיפוח כדי ששום חולה לא תרגיש חוסר </p>
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
                                    <img src="mesameac16.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>פעילות במחלקת קורונה</h2>
                                    <p>גם בימים קשים כאשר כולים חוששים להיכנס למחלקת קורונה אנו נכנסים למחקה כדי לשמח</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* תמונה שניה */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="1_pinok.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>עגלת פינוקים לילדים</h2>
                                    <p>בחלקת ילדים אנחנו דואגים תמיד לפנק אותם בכל מיני פינוקים כדי שבכל זמן השמחה תישאר בפניהם</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="column">
                        {/* תמונה שלישית */}
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="image18.jpg" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>עגלת פינוקים למבוגרים</h2>
                                    <p>האירגון שלנו מעניק למבוגרים עגלת פינוקים בא המבוגרים מקבלים פינוקים בשפע </p>
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
                                    <h2>סעודות שבת </h2>
                                    <p>האירגון שלנו בכל שבת דואג לחולים ולמשפחות החולים </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* תמונה שניה */}
                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="mesameac21.png" alt="Paris" />
                                </div>
                                <div className="flip-box-back">
                                    <h2>המשמחים</h2>
                                    <p>המשמחים שלנו פה תמיד בשביל לשמוח ולשמח </p>
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
                                    <h2>הכוונה רפואית</h2>
                                    <p>יש לנו צוות של אנשי מקצוע שנותנים לחולים הכוונה רפאית בלווי אישי</p>
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
            <a className="y_about"> (: החיוך שלהם השמחה שלנו </a>
            </div>
            {/* תמונות בלולאה עוברות */}
            <div> 
                <div className="row">
                    <div className="column">
                        <img src="image12.jpg" />
                    </div>
                    <div className="column">
                        <img src="home_page_4.jpg" />
                    </div>
                    <div className="column">
                        <img src="home_page_1.jpg" />
                    </div>
                </div>
            </div>
            <div className="path"></div>
            {/* זה הפס בסוף העמוד  */}
            <div className="y_under_Line">
             <br/><br/><br/>
                <a href="https://www.facebook.com/dvd4756/" className="icon_size" ><Icon icon="bi:facebook" color="#ED2230" width="34" height="34" /></a>
                <a href="https://instagram.com/osimsameach?igshid=YTM0ZjI4ZDI=/" className="icon_size"><Icon icon="akar-icons:instagram-fill" color="#ED2230" width="34" height="34" /></a>
                <a href="https://youtube.com/channel/UCnVhKrm6CQ_PoSFwg1fEIYQ" className="icon_size"><Icon icon="akar-icons:youtube-fill" color="#ED2230" width="34" height="34" /></a>
               
            </div>
        </div>


    )
}