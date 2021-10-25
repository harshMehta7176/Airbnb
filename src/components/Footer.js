import React from 'react'
import "./Footer.css";

function footer() {
    return (
        <div>
            <h1 style={{ fontSize: "40px", color: "black", marginLeft: "110px", marginTop: "100px" }}>Discover things to do</h1>
            <div className="Flex">
                <div className="image-text">
                    <div className="image-Footer">

                    </div>
                    <div className="text" >
                        <h2 style={{marginBottom:"0px",height:"10px"}}>Experiences</h2>
                        <h4 style={{fontWeight:"lighter"}}>Find unforgettable activites near you</h4>
                    </div>
                </div>
                <div className="image-text">
                    <div className="image-Footer" style={{background:"url(https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480) center/cover no-repeat"}}>

                    </div>
                    <div className="text" >
                        <h2 style={{marginBottom:"0px",height:"10px"}}>Experiences</h2>
                        <h4 style={{fontWeight:"lighter"}}>Find unforgettable activites near you</h4>
                    </div>
                </div>
                <div className="image-text">
                    <div className="image-Footer"style={{background:"url(https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480) center/cover no-repeat"}}>

                    </div>
                    <div className="text" >
                        <h2 style={{marginBottom:"0px",height:"10px"}}>Experiences</h2>
                        <h4 style={{fontWeight:"lighter"}}>Find unforgettable activites near you</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
