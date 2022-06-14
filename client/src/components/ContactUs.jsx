import "../styles/ContactUs.css"
import { Icon } from '@iconify/react'

export const ContactUs = () => {

    return (
        <div >
         
            <h1 className="m_h1">צרו איתנו קשר</h1>
            <h2 className="m_pink_h2">משרדי העמותה </h2>
            <h4 className="m_h4">שמואל בייט 12 ירושלים</h4>
            <h4 className="m_h4">טלפון : 023011500</h4>
            <h4 className="m_h4"> A3011500@gmail.com : מייל </h4>
            <img className="size_of_img" src="m_icom.png"></img>
            <h2 className="m_pink_h2">  משרדי ההנהלה</h2>
            <h4 className="m_h4">כתובת : צפת 34 ירושלים</h4>
            <h4 className="m_h4">טלפון : 0527118350</h4>
            <h4 className="m_h4"> david@osimsameach.org.il : מייל </h4>
            <img className="size_of_img" src="m_icom.png"></img>
                <br/><br/>
                <div><h4 className="m_h4">עקבו אחרנו</h4></div>
                <div class="centered">
                    <a href="https://www.facebook.com/dvd4756/" className="icon_size"  ><Icon icon="bi:facebook" color="#223A78" width="34" height="34" /></a>
                    <a href="https://instagram.com/osimsameach?igshid=YTM0ZjI4ZDI=/" className="icon_size"><Icon icon="akar-icons:instagram-fill" color="#223A78" width="34" height="34"/></a>
                    <a href="https://youtube.com/channel/UCnVhKrm6CQ_PoSFwg1fEIYQ" class="icon_size"><Icon icon="akar-icons:youtube-fill" color="#223A78" width="34" height="34"/></a>
                </div>
              {/* זה הפס בסוף העמוד  */}
              <div className="y_under_Line_contact "/>
        </div>

    )
}