import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <div class="topnav">
            <br></br>
            <Link to="/"><a>דף הבית  </a>  </Link>
            <Link to="/Gallery"><a>התחברות</a> </Link>
            <Link to ="/AboutUs"><a>אודות</a> </Link>
            <Link to ="/ContactUs"><a>צור קשר</a></Link>
            {/* <img src="imagelog.png"></img> */}
    
        </div>
    )
}