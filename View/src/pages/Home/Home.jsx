import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import LikeButton from '../../pictures/Like Icon.png';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="Home">
            <NavBar />
            <div className="jumpbotron">
                <div className="jumpbotron_wrapper">
                    <div>
                        <div>
                            <h1 className="text">Haitian In Tech - Budget</h1>
                            <hr />
                            <button className="button_home">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_wrapper">
                <div className="projects_map"></div>
                <div className="projects_lists">
                    <div className="lists_box">
                        <h1>Top Projects Ranking</h1>
                    </div>
                    <hr className="line_first"/>
                    <div className="lists_box">
                        <h1>Project 1</h1>
                        <div className="sub-item"><h1>10K</h1><img className="like" src={LikeButton} alt="like button"/></div>
                    </div>
                    <hr className="line"/>
                    <div className="lists_box">
                        <h1>Project 2</h1>
                        <div className="sub-item"><h1>20K</h1><img className="like" src={LikeButton} alt="like button"/></div>
                    </div>
                    <hr className="line"/>
                    <div className="lists_box">
                        <h1>Project 3</h1>
                        <div className="sub-item"><h1>30K</h1><img className="like" src={LikeButton} alt="like button"/></div>
                    </div>
                    <hr className="line"/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
