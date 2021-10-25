import React from 'react'
import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps"
import {IconButton} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import Taskbar from './Taskbar';



const Header = () => {
    
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top-left">
                
                    <div className="header-top-left-text" >airbnb</div>
                </div>
                <div className="header-top-middle">
                    <div className="header-top-middle-text">Places to Stay</div>
                    <div className="header-top-middle-text">Experiences</div>
                    <div className="header-top-middle-text">Online Experiences</div>
                </div>
                <div className="header-top-right">
                    <IconButton style={{color:"black",fontSize:"20px"}}>
                        Become a Host
                    </IconButton>
                    <IconButton>
                    <div className="globe"><LanguageIcon/></div>
                    </IconButton>
                </div>
                
            </div>
            <Taskbar/>
        </div>
    )
}

export default Header



