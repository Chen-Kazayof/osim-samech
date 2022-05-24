
// import"../styles/homePage.css"

// export const HomePage = () => {

    
//     return (
//         <div>
//                 <a class ="help">!שלום</a>
//                 <a class ="help2">נא להקיש כתובת מייל וסיסמה להתחברות</a>
//                 <input class="frame inframe " type="text" placeholder="מספר טלפון :"  name="umane" required></input>
//                  <input class="frame2 inframe" type="password" placeholder="סיסמה :" name="psw" required></input>
//                  <a class ="forgatKod" href="" >  שכחתי סיסמה  </a>
//                  <button type="button" class="cancelbtn"><p>אישור</p></button>
                 
//                     </div>
//                 )
// }
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

    return (
        <div>
            
           <img src={IMAGES[index]} />
            <p>העשיה שלנו </p>
        </div>
    )
}