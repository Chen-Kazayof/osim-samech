import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <div>
            <Link to="/"><h1>home</h1></Link>
            <Link to="/gallery">gallery</Link>
           {/* <img src={} /> */}
        </div>
    )
}