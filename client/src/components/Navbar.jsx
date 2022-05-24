import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <div class="topnav">
            <br></br>
            <Link to="/"><a>דף הבית  </a>  </Link>
            <Link to ="/AboutUs"><a>אודות</a> </Link>
            <Link to="/Gallery"><a>גלריה</a> </Link>
            <Link to ="/OurActive"><a>הפעילות שלנו</a> </Link>
            <Link to="/Donation"><a>תרומות</a> </Link>
            <Link to="/Volonteere"><a>התנדבות</a> </Link>
            <Link to ="/ContactUs"><a>צור קשר</a></Link>
            <img src="/imagelog.png"/>
            {/* <img src="imagelog.png"></img> */}
    
        </div>
    )
}