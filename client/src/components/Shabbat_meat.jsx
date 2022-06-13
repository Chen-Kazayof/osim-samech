import "../styles/Shabbat_meat.css"
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom';


export const Shabbat_meat = () => {

    const navigate = useNavigate();

    const sendEmail = (e) => {
        // console.log('ksjdfhlkdhjdlfkgjh')
        e.preventDefault();

        emailjs.sendForm('service_7pcoanl', 'template_zkerp75', e.target, 'QWU5_t71cSv2nZuDU')
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
            <div className="m_img_before">
                <br/>  <br/>  <br/>
                <a className="m_aa">סעודות שבת</a></div>

            <div className='shabos'>
                <form onSubmit={sendEmail}>
                <a className="m_invitation_meal"> הזמנת סעודות שבת</a><br/>
                    <input type="text" class="m_f_name" name="f_name" placeholder='שם מזמין' /><br />
                    <input type="text"  class="m_f_name" name="tel_num" placeholder='מספר טלפון' /><br />
                    <input type="email"  class="m_f_name" name="gmail_address" placeholder='כתובת מייל' /><br />
                    <input type="text" class="m_f_name" name="num_of_participant" placeholder='מספר משתתפים' />
                    <h3 className="m_invitation_meal">: סעודות לבחירה</h3>
                    <input type="radio" id="html" name="laila" value="סעודת ליל שבת" />
                    <label for="html">סעודת ליל שבת</label><br />
                    <input type="radio" id="html" name="boker" value="סעודת בוקר שבת" />
                    <label for="html">סעודת בוקר שבת </label><br />
                    <button className="sub" type="submit" >שלח</button>
                </ form >
            </div>


        </div >

    )
}
