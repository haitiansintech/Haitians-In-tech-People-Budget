import './NavBar.css';
import HaitiLogo from '../../pictures/HIT logo.png'

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="LogoContainer">
                <img src={HaitiLogo} alt="Haiti Logo"/>
            </div>
            <div className="NavOptionsContainer">
                <h1 className="option">Home</h1>
                <h1 className="option">Budget</h1>
                <h1 className="option">Projects</h1>
                <h1 className="option">Documentation</h1>
            </div>
        </div>
    );
}

export default NavBar;
