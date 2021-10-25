import React from 'react'
import "./Middlebottom.css"
function Middlebottom() {
    return (
        <div>
            <h1 style={{fontSize:"50px",marginLeft:"100px"}}>Live anywhere</h1>
            <div  className="Middlebottom">
              <div className="image-text">
                 <div className="image"></div>
                 <div className="text">Outdoor getaways</div>
              </div>
              <div className="image-text">
                 <div className="image" style={{background: "url(https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480) center/cover no-repeat"}}></div>
                 <div className="text">Outdoor getaways</div>
              </div>
              <div className="image-text">
                 <div className="image" style={{background: "url(https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480) center/cover no-repeat"}}></div>
                 <div className="text">Outdoor getaways</div>
              </div>
              <div className="image-text">
                 <div className="image" style={{background: "url(https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480) center/cover no-repeat"}}></div>
                 <div className="text">Outdoor getaways</div>
              </div>
            </div>
            <div className="othertext">
                <h1 style={{fontSize:"50px",color:"white",paddingLeft:"100px",paddingTop:"100px"}}>Try hosting</h1>
                <h1 style={{fontSize:"20px",color:"white",paddingLeft:"100px",fontWeight:"lighter"}}>Earn extra income and unlock new</h1>
                <h1 style={{fontSize:"20px",color:"white",paddingLeft:"100px",fontWeight:"lighter"}}>Oppurtunities by sharing your space</h1>
            </div>
        </div>
    )
}

export default Middlebottom
