import logo from "./assets/logo.jpg";
import  "./Header.css";

function Header(){

    return(
        <>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo}></img>
                </div>

                <div className="header-item-container">

                    <div className="header-item">
                        <h3>Letter</h3>
                    </div>

                    <div className="header-item">
                        <h3>Account</h3>
                    </div>

                </div>


            </div>
        </>
    );

}

export default Header;