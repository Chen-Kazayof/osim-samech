import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <div class="topnav">
            <br></br>
            <Link to="/"><a>דף הבית  </a>  </Link>
            <Link to ="/About"><a>אודות</a> </Link>
            <Link to="/Gallery"><a>גלריה</a> </Link>
            <Link to ="/OurActive"><a>הפעילות שלנו</a> </Link>
            <Link to="/Donations"><a>תרומות</a> </Link>
            <Link to="/Volonteere"><a>התנדבות</a> </Link>
            <Link to ="/ContactUs"><a>צור קשר</a></Link>
            <img class="yimg"src="/imagelog.png"/>
            {/* <img src="imagelog.png"></img> */}
    
        </div>
    )
}