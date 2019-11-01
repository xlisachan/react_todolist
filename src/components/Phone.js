import React from 'react';
import '../stylesheets/BackgroundItem.css'

const Phone = () => {
    return (
        <div className="phone">
            <div style={{width: '94%', display: 'flex', justifyContent: 'space-between'}}>
                <div className="phone-camera1"></div>
                <div className="phone-camera2"></div>
            </div>
            
            <div className="phone-screen"></div>
        </div>
    );
}
 
export default Phone;
