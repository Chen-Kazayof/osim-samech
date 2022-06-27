import "../styles/Shabbat_meat.css"
import "../styles/volonteere.css"

import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';


export const Shabbat_meat = () => {

    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5uww0m8', 'template_xzmo35j', e.target, 'GSeQcFD5Z1gOKdrF4')
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
                <br />  <br />  <br />
                <a className="m_aa">סעודות שבת</a></div>

            <div className='shabos'>
            <div className="titleDivVol">טופס הצטרפות</div><br/>

                <form onSubmit={sendEmail} className="formVol">

                    {/* <a className="m_invitation_meal"> הזמנת סעודות שבת</a><br /> */}
                    <input type="text" className="textVol" name="f_name" placeholder="שם המזמין"></input>
                    <input type="email" className="textVol" name="gmail_address" placeholder="כתובת מייל"></input>
                    <input type="number" className="textVol" name="tel_num" placeholder="מספר טלפון"></input>
                    <select name="num_of_participan" className="selectVol">
                        <option value="" disabled selected>מספר מזמינים</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <select name="laila" className="selectVol">
                        <option value="" disabled selected>סעודות לבחירה</option>
                        <option value="סעודת ליל שבת">סעודת בוקר שבת</option>
                        <option value=" סעודת בוקר שבת ">סעודת ליל שבת</option>
                        <option value="שתי הסעודות">שתי הסעודות</option>

                    </select>
                    <button className="btnVol" type="submit" >שלח</button>
                </ form >
            </div>
            <div className="underLineVol "></div>


        </div >

    )
}
