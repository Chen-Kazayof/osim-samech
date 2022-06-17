import "../styles/OurActive.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';


export const OurActive = () => {

    return (
        <div>
            <br />
            <div className="title_act">הפעילויות שלנו</div>
            <br />
            <Link to="/FunWagonChild"> <img className="img_active" src="active_page/img_active1.png" alt="not"/> </Link>
            <Link to="/FunWagonAdult"> <img className="img_active" src="active_page/img_active5.png" alt="not"/> </Link>
            <Link to="/Act_help"> <img className="img_active" src="active_page/img_active2.png" alt="not"/> </Link>
            <Link to="/Mesamchim_act"> <img className="img_active" src="active_page/img_active4.png" alt="not"/> </Link>
            <Link to="/Act_shabbat"> <img className="img_active" src="active_page/img_active3.png" alt="not"/> </Link>
            <Link to="/Act_tipach"> <img className="img_active" src="active_page/img_active6.png" alt="not"/> </Link>

            <div className="under_ruler"></div>
            
        </div>
    );
}
