import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar.css';

import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className="nav-bar">
            <ul>
                <div className="combiner">
                <li className="icon">
                    <img src={process.env.PUBLIC_URL + '/icon.png'} alt="Icon" />
                </li>
                <li className="title">Semi Hyphen</li>
                </div>
                <div className="items">
                <div className="group">
                <li className="item-1">
                    <button className="nav-button">Doc</button>
                    </li>
                <li className="arrow"><i className="fas fa-arrow-up"></i></li>
                </div>
                <div className="group">
                        <li className="item-2">
                            <Link to="/second-page">
                                <button className="nav-button">Waitlist</button>
                            </Link>
                        </li>
                        <li className="arrow"><i className="fas fa-arrow-up"></i></li>
                    </div>
                </div>
                <div className="social-icons">
                <ul>
                <li className="icons">
                    <i className="fa-brands fa-x-twitter"></i>
                </li>
                <li className="icons tel">
                    <i className="fab fa-telegram-plane arrow"></i>
                </li>
                <li>
                    <button className="launch-btn">Launch App</button>
                </li>
                </ul>
                </div>
            </ul>
        </div>
            )
}
export default Navbar