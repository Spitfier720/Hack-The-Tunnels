import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
    const { loggedIn, logout } = useAccountContext();
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbar__logo">
                {/* Linking the image as the logo */}
                <Link to="/">
                    <img src="https://pbs.twimg.com/media/FgmWip_XkAEV1Xb?format=jpg&name=small" alt="Store Logo"
                         width="250"
                         height="130" />
                </Link>
            </div>
            <div className="navbar__account">
                {loggedIn() === false ? (
                    <>
                        <button onClick={() => navigate("/sign-up")}>Sign Up</button>
                        <button onClick={() => navigate("/login")}>Login</button>
                    </>
                ) : (
                    <button onClick={() => logout()}>Logout</button>
                )}
            </div>
        </div>
    );
}

export default Navbar;