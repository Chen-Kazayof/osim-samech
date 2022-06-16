import React, { useState, useEffect } from "react";
import "../styles/About.css"


// const IMAGE_ARRAY = ["/image1.jpg"];
// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <div className="back">
//       <p className="text">
//         {isReadMore ? text.slice(0, 9) : text}
//         <span onClick={toggleReadMore} className="read-or-hide">
//           {isReadMore ? "...קרא יותר" : " הראה פחות"}
//         </span>
//       </p>
//     </div>
//   );
// };

export const About = (props) => {

  return (
    <div className="bod">
      {/* <ReadMore> */}
        <br/>
        <p class="title_about">?איך לעשות שמח</p>
        <div className="divAbout">.זה בדיוק מה ששאלתי את עצמי כשיצאתי מחדר הניתוח להתאוששות מגובס כולי וכואב אחרי תאונת דרכים קשה</div>
        <div className="divAbout">.השקט המתוח צרם לי באוזניים. מעין ענן כבד של מחשבות ודאגות מילא את האווירה ללא מילים</div>
        <div className="divAbout">.הימים עברו בלי שום שינוי, גיוון או מישהו שיבוא ויזכיר לרגע שיש עולם אחר חוץ מאשפוזים, כאבים תרופות ובדיקות</div>
        <div className="divAbout">.גם בשבתות בית החולים הרגיש עולם אחר. לא היו סעודות שבת, לא היתה אוירה של שבת.לא היו חלות על השולחן או שירים. היה חסר קצת טעם של בית</div>
        <div className="divAbout">.כשהשתחררתי ידעתי שהתשובה לשאלה "איך עושים שמח" נמצא בתוכי</div>
        <div className="divAbout">.ארגנתי כמה מתנדבים עם גיטרות כדי לנגן, לשיר, להישאר מעט ולהקשיב ללב גם בין המילים</div>
        <div className="divAbout">.מכאן זה הלך וגדל לארגון בפריסה ארצית בבתי החולים ומאות מתנדבים שמשמחים חולים עם מנגינות ושירים</div>
        <div className="divAbout">.זאת ועוד</div>
        <div className="divAbout">.עגלות הנתינה מתגלגלות במחלקות עם עוגות, מאפים טובים, שתיה חמה ומיצים טריים</div>
        <div className="divAbout">.אצל הילדים פתאום בורקות העיניים, כי מי זוכר את הדקירות של המחטים מול על המתוקים? ימבמבם, פופקורן, אייס קפה וכל מה שאוהבים</div>
        <div className="divAbout">.החלום מתגשם ובשבתות אוהל השמחה מלא באור, אווירה של שבת. השולחן ערוך ועמוס בסעודות עשירות ופינוקים, ויותר מ- 300 אנשים שלרגע שוכחים כמעט שהם בעצם חולים</div>
        <div className="divAbout">.המסירות של המתנדבים מפתיעה אותי בכל פעם מחדש. הם שומרים על החולים בשעות לא שגרתיות, דואגים לילדים ליצירות, להפעלות ולמסיבות</div>
        <div className="divAbout">.הם נמצאים שם, חווים איתם את הכאבים הגדולים וחוגגים איתם נצחונות קטנים</div>
        <div className="divAbout">.הם נמצאים שעות על הרגליים ומחלקים מרק חם למי שלא יכול לקום וללכת</div>
        <div className="divAbout">...ועל הדרך לא לנסות לחשוב על מה היה קורה אם לא</div>
        <div className="divAbout">,אם הילד היה ממשיך לשיר לבד לעצמו</div>
        <div className="divAbout">,אם עוד לחי קטנה היתה נשארת רטובה</div>
        <div className="divAbout">אם אותם הלבבות היו שוב נשברים</div>
        <div className="divAbout">כי הם היו מרגישים שקופים</div>
        <div className="divAbout">,בין טיפה של כימו לטיפת אינפוזיה</div>
        <div className="divAbout">,ורק מחכים לטיפת יחס לאור וחום</div>
        <div className="divAbout">...למישהו לדבר איתו, ואולי גם לשתוק</div>
        <div className="divAbout">,אז אנחנו פה כדי להיות קשת בים של עננים</div>
        <div className="divAbout">,לשיר, לנגן על מיתרי הלב להיות כשכואב</div>
        <div className="divAbout">...להעלות חיוך ושמחה לעשות כיף ואווירה טובה כי</div>
        <p class="sub_title">!באנו לעשות שמח</p>
      {/* </ReadMore> */}
    </div>
  )

}




