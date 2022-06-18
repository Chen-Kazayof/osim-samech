import "../styles/volonteere.css"
import * as React from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


export const Volonteere = () => {
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7pcoanl', 'template_b72frgk', e.target, 'QWU5_t71cSv2nZuDU')
      .then((result) => {
        console.log(result);
        navigate('/Vol_sec')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <div>
      <div className="backVol"></div>
      <div className="titleH1Vol">גם אתם רוצים להיות </div>
      <div className="title2H1Vol">?חלק</div>
      <div className="titleH3Vol">בואו הצטרפו למשפחת המתנדבים</div>
      <div className="titleDivVol">טופס הצטרפות</div>
      <form onSubmit={sendEmail} className="formVol">
          <input type="text" className="textVol" name="flname" placeholder="שם פרטי ושם משפחה"></input>
          <select name="age" id="age" className="selectVol">
            <option value="" disabled selected>גיל</option>
            <option value="15-18">15-18</option>
            <option value="18-20">18-20</option>
            <option value="20-25">20-25</option>
            <option value="25+">25+</option>
          </select>
          <select name="place" id="place" className="selectVol">
            <option value="" disabled selected>אזור מגורים</option>
            <option value="מרכז">מרכז</option>
            <option value="צפון">צפון</option>
            <option value="דרום">דרום</option>
            <option value="ירושלים">ירושלים</option>
          </select>
          <input type="number" className="textVol" name="phone" placeholder="טלפון ליצירת קשר"></input>
          <input type="email" className="textVol" name="email" placeholder='דוא"ל'></input>
          <select name="hospital" id="hospital" className="selectVol">
            <option value="" disabled selected>בית חולים</option>
            <option value="שערי צדק">שערי צדק</option>
            <option value="הדסה עין כרם">הדסה עין כרם</option>
            <option value="שיבא תל השומר">שיבא תל השומר</option>
            <option value="סורוקה">סורוקה</option>
            <option value="רמבם">רמבם</option>
            <option value="איכילוב">איכילוב</option>
          </select>
          <select name="Volunteering" id="Volunteering" className="selectVol">
            <option value="" disabled selected>תחום התנדבות</option>
            <option value="חלוקת קפה ומאפה וכריכים">חלוקת קפה ומאפה וכריכים</option>
            <option value="איפור ולק ג'ל ">איפור ולק ג'ל </option>
            <option value="פעילות במחלקות קורונה">פעילות במחלקות קורונה</option>
            <option value="עגלת הפינוקים לילדים">עגלת הפינוקים לילדים</option>
            <option value="עגלת הפינוקים למבוגרים">עגלת הפינוקים למבוגרים</option>
            <option value="סעודות שבת">סעודות שבת</option>
            <option value="המשמחים">המשמחים</option>
            <option value="מסיבות לילדים חולים ובעלי מוגבלויות">מסיבות לילדים חולים ובעלי מוגבלויות</option>
            <option value="חלוקת מרקים חמים">חלוקת מרקים חמים</option>
            <option value="פינות קפה ומאפה במחלקות">פינות קפה ומאפה במחלקות</option>
          </select>



          <button type="submit" className="btnVol">שלח</button>
        </form>
        <div className="underLineVol "></div>



    </div>
  )
}











