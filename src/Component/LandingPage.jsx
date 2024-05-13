import {Link} from "react-router-dom";
import "../Styles/LandingPage.css";
const LandingPage=()=>{
    return(
        <div className="landingpage">
            <Link to="/adminlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN23av-r-3a5gkq-FsoK4YBJZq-zJA4XCaA&usqp=CAU" alt="" />
                <h3>Admin</h3>
            </Link>
            <Link to="/userlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt="" />
                <h3>User</h3>
                </Link>
        </div>
    )
}
export default LandingPage;