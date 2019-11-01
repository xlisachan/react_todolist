import React from 'react';
import '../stylesheets/BackgroundItem.css'
import { FaGlobeAmericas } from 'react-icons/fa';

const Passport = () => {
    return (
        <div className="passport">
            <div className="passport-book">
                <div>PASSPORT</div>
                <div className="passport-globe"><FaGlobeAmericas /></div>
            </div>

            <div className="passport-ticket">
                <div className="passport-stripe"></div>
            </div>
        </div>
    );
}
 
export default Passport;
