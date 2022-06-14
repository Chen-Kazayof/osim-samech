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
        navigate('/Submit_Shabbat')
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
<<<<<<< HEAD
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
=======
            <option value="15">15-18</option>
            <option value="18">18-20</option>
            <option value="20">20-25</option>
            <option value="25">25+</option>
          </select>
          <select name="place" id="place" className="selectVol">
            <option value="" disabled selected>אזור מגורים</option>
            <option value="center">מרכז</option>
            <option value="north">צפון</option>
            <option value="South">דרום</option>
            <option value="jerusalem">ירושלים</option>
>>>>>>> main
          </select>
          <input type="text" className="textVol" name="phone" placeholder="טלפון ליצירת קשר"></input>
          <input type="text" className="textVol" name="email" placeholder='דוא"ל'></input>
          <select name="hospital" id="hospital" className="selectVol">
            <option value="" disabled selected>בית חולים</option>
<<<<<<< HEAD
            <option value="שערי צדק">שערי צדק</option>
            <option value="הדסה הר הצופים">הדסה הר הצופים</option>
            <option value="תל השומר">תל השומר</option>
          </select>
          <select name="Volunteering" id="Volunteering" className="selectVol">
            <option value="" disabled selected>תחום התנדבות</option>
            <option value="א">א</option>
            <option value="ב">ב</option>
            <option value="ג">ג</option>
            <option value="ד">ד</option>
=======
            <option value="shaariZedek">שערי צדק</option>
            <option value="hadasa">הדסה הר הצופים</option>
            <option value="telHashomer">תל השומר</option>
          </select>
          <select name="Volunteering" id="Volunteering" className="selectVol">
            <option value="" disabled selected>תחום התנדבות</option>
            <option value="a">א</option>
            <option value="b">ב</option>
            <option value="c">ג</option>
            <option value="d">ד</option>
>>>>>>> main
          </select>



          <button type="submit" className="btnVol">שלח</button>
        </form>
        <div className="underLineVol "></div>



    </div>
  )
}











