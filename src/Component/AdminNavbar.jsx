import "../Styles/AdminNavbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Dropdown from 'react-bootstrap/Dropdown';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

const AdminNavbar=()=>{
    return(
        <div className="AdminNavbar">
            <div className="logo">
            <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="yy" />
            </div>

            <div className="search">
                <input type="text" placeholder="Search"/>
                <button><SearchOutlinedIcon/></button>
            </div>
            <div className="setting">
            <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <SettingsIcon/> Settings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><Link to="/adminhomepage/additem">Add Item</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/">Logout</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
        </div>
    )
}
export default AdminNavbar;