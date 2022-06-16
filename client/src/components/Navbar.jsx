import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        
        <div className="topnav ">
            <br></br>
            <Link to="/">דף הבית</Link>
            <Link to ="/About">אודות </Link>
            <Link to="/Gallery">גלריה </Link>
            <Link to ="/OurActive">הפעילות שלנו </Link>
            <Link to="/shabbat_meat">רישום לשבת </Link>
            <Link to="/Donations">תרומות </Link>
            <Link to="/Volonteere">התנדבות </Link>
            <Link to ="/ContactUs">צור קשר</Link>
            <img src="/imagelog.png" alt="Logo image" />
            {/* <div className="underLine"></div> */}

            </div>

    )
}
