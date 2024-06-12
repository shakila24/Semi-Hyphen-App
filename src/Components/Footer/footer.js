import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import './footer.css';

const Footerpage = () => {
    const [centered, setCentered] = useState(false);

    const handleIconClick = () => {
        setCentered(!centered);
    }

    return (
        <div className={`footer ${centered ? 'centered' : ''}`}>
            <div className="footer-icon" onClick={handleIconClick}>
                <img src={process.env.PUBLIC_URL + '/icon.png'} alt="Icon" />
            </div>
            <div className="container">
                <div className="block-1">
                    <div className="sub-block-1">
                        <p className='product'>Product</p>
                        <div className="sub-block-container">
                            <p className="doc">Doc</p>
                            <p className="waitlist">Waitlist</p>
                        </div>
                    </div>
                    <div className="sub-block-2">
                        <p className='info'>Info</p>
                        <div className="sub-block-container">
                            <p className="items">Home</p>
                            <p className="items">Waitlist</p>
                            <p className="items">About Us</p>
                            <p className="items">Community</p>
                        </div>
                    </div>
                </div>
                <div className="block-2">
                    <p>Launch App</p>
                </div>
            </div>
            <div className={`heading ${centered ? 'centered' : ''}`}>
                <p onClick={handleIconClick}>Semi Hyphen</p>
            </div>
            <div className="copy">
                <div className="copy-icon"></div>
                <div className="copy-content">
                    <p>Semi Hyphen 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footerpage;
