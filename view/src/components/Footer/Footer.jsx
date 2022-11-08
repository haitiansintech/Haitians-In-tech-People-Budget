import './Footer.css';
import LikeButton from "../../pictures/Like Icon.png";
import HaitiLogo from "../../pictures/HIT logo.png";

const Footer = () => {
    return (
        <div className="footer_wrapper">
            <div className="footer_options">
                <div className="footer_options_container">
                    <div className="options">
                        <img src={HaitiLogo} alt={"Haiti Logo"}/>
                    </div>
                    <div className="options">
                        <h1 className="orange">Links</h1>
                        <h1 className="orange">Connects</h1>
                        <h1 className="invisible">Invisible</h1>

                    </div>
                    <div className="options footer_options_items">
                        <h1>Link 1</h1>
                        <h1>Facebook</h1>
                        <h1 className="orange">Careers</h1>

                    </div>
                    <div className="options footer_options_items">
                        <h1>Link 2</h1>
                        <h1>Instragram</h1>
                        <h1 className="invisible">Invisible</h1>
                    </div>
                    <div className="options footer_options_items">
                        <h1>Link 3</h1>
                        <h1>Twitter</h1>
                        <h1 className="orange">Contact Us</h1>
                    </div>
                    <div className="options footer_options_items">
                        <h1>Link 4</h1>
                        <h1>Linkedin</h1>
                        <h1 className="invisible">Invisible</h1>
                    </div>
                </div>
            </div>
            <div className="footer_newsletter">
                <h1 className="newsletter_items orange">Subscribe to our newsletter</h1>
                <input placeholder="📩 Email Address..." className="newsletter_input"/>
                <button className="newsletter_button white">Subscribe</button>
                <h4 className="newsletter_items white">Copyrigjt Lorem Ipsum text Joe mama Socar toitre senos  Juno gotre loma sed jupo</h4>
            </div>
        </div>
    );
}

export default Footer;
