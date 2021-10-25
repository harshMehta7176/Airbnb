import React from 'react';
import "./Taskbar.css";
import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

function Taskbar() {
    return (
        <div className="taskbar">
          <div className="center">
              <IconButton>
            <div className="taskbar-text">
               <div className="taskbar-text-top">
                  Location
              </div>
              <div className="taskbar-text-bottom">
                  Where are you going?
              </div>
            </div>
            </IconButton>
            <IconButton>
            <div className="taskbar-text">
               <div className="taskbar-text-top">
                  Check in
               </div>
               <div className="taskbar-text-bottom">
                 Add dates
               </div>
            </div>
            </IconButton>
            <IconButton>
            <div className="taskbar-text">
               <div className="taskbar-text-top">
                  Check out
               </div> 
               <div className="taskbar-text-bottom">
                  Add dates
               </div>
            </div>     
            </IconButton>
            <IconButton>
            <div className="taskbar-text" style={{border:"none"}}>
              <div className="taskbar-text-top">
                 Guests
              </div>
              <div className="taskbar-text-bottom">
                 Add guests
              </div>
             
            </div>    
            </IconButton>
            <IconButton>
            <div className="search-btn"><SearchIcon/></div>
            </IconButton>
            </div>   
        </div>
    )
}

export default Taskbar
