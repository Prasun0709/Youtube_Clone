import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AddProducts from "./AddProducts";
import ViewProduct from "./ViewProduct";
import EditProduct from "./EditProd";

function AdminHomepage(){
    return(
        <div className="AdminHomepage">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<ViewProduct/>}/>
                <Route path="/additem" element={<AddProducts/>}/>
                <Route path="/editItem/:id" element={<EditProduct/>}/>
            </Routes>
        </div>
    )
}
export default AdminHomepage;