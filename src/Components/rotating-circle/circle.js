import React from 'react';
import './circle.css'; // Import the CSS file for styling

const RotatingCircle = ({ sizes }) => {
    return (
        <div className="circle-block">
            <div className="big-circle" style={{ width: sizes.big, height: sizes.big }}>
                <div className="medium-circle" style={{ width: sizes.medium, height: sizes.medium }}>
                    <div className="small-circle" style={{ width: sizes.small, height: sizes.small }}>
                    </div>
                </div>
            </div>
            <div className="big-circle" style={{ width: sizes.big, height: sizes.big }}>
                <div className="medium-circle" style={{ width: sizes.medium, height: sizes.medium }}>
                    <div className="small-circle" style={{ width: sizes.small, height: sizes.small }}>
                    </div>
                </div>
            </div>
            <div className="big-circle" style={{ width: sizes.big, height: sizes.big }}>
                <div className="medium-circle" style={{ width: sizes.medium, height: sizes.medium }}>
                    <div className="small-circle" style={{ width: sizes.small, height: sizes.small }}>
                    </div>
                </div>
            </div>
            <div className="big-circle" style={{ width: sizes.big, height: sizes.big }}>
                <div className="medium-circle" style={{ width: sizes.medium, height: sizes.medium }}>
                    <div className="small-circle" style={{ width: sizes.small, height: sizes.small }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RotatingCircle;
