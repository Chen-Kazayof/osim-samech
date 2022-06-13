import "../styles/AboutUs.css"
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import { send } from 'emailjs-com';


export const AboutUs = (props) => {
    // const [toSend, setToSend] = useState({ from_name: '', to_name: '', message: '', reply_to: '', });



    // const handleClick = () => {
    //     emailjs.send('service_7pcoanl', 'template_b72frgk', { name: 'mose' }, 'QWU5_t71cSv2nZuDU')
    //         .then(function (response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //         }, function (error) {
    //             console.log('FAILED...', error);
    //         });
    // }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_7pcoanl', 'template_b72frgk', e.target, 'QWU5_t71cSv2nZuDU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (

        <div className='shabos'>

            <form onSubmit={sendEmail}>
                <label>אימייל:</label>
                <textarea name="user_email" /><br />
                <label>תפקיד:</label>
                <textarea name="title" /><br />
                <label>תאור התפקיד:</label>
                <textarea name="job_title" /><br />
                <label>דרישות התפקיד:</label>
                <textarea name="requiments" /><br />
                <label>ימים ושעות התנדבות</label>
                <textarea name="hour" /><br />
                <input type="submit" value="שלח" />
            </form>


        </div >



        /* <div>
        <title>הפעילויות שלנו</title>

        <div className='shabos'>

             <div>
            <input type='text' name='to_name' placeholder='שם המזמין' />
                </div>
            <div>  
                <input type='text' name='from_name' placeholder='שם משתמש'/>
                </div>
            <div>
                <input type="email"  name="gmail_addres"  placeholder='כתובת מייל'  />
                </div>
            <div>   <select name="op" id="option">
                <option value="op1">1</option>
                <option value="op1">2</option>
                <option value="op1">3</option>
                <option value="op1">4</option>
                <option value="op1">5</option>
            </select>
            </div>

            <div>
                <button className="sub" type="button" onClick={handleClick}>לשליחה</button>
            </div> */

        // </div>
        // </div>





    )

}
