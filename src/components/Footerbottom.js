import React from 'react'
import './Footerbottom.css';

function Footerbottom() {
    var currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>© {currentYear} Airbnb clone - this is a demo</p>
            <p>Privary · Terms · Sitemap · Company Details</p>
        </div> 
    )
}

export default Footerbottom
