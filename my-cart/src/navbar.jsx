import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    let navi = useNavigate()
    
    const state = useSelector((state)=>state.cart)
    console.log(state)


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#" onClick={()=>navi("/")}>SK COLLECTION</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" onClick={()=>navi("/")}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={()=>navi("/products")}>Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={()=>navi("/about")}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={()=>navi("/contact")}>Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-primary" onClick={()=>navi("/login")}>
                                <i className="fa fa-sign-in me-1"></i>Login</a>
                            <a href="" className="btn btn-primary ms-2" onClick={()=>navi("/register")}>
                                <i className="fa fa-user-plus me-1"></i>Register</a>
                            <a href="" className="btn btn-outline-dark ms-2" onClick={()=>navi("/cart")}>
                                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;