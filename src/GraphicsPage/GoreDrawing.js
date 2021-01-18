import React from 'react'
import './GoreDrawing.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from '../features/Counter.module.css';


function GoreDrawing() {
    return (
        <div className="goreDrawing">
            <div className="nav">
                <Link to="/">
                    <div className="nav__button">
                        <IconButton className="back__icon">
                            <ArrowBackIosIcon style={{"color":"white"}}/>
                        </IconButton>
                    </div>
                </Link>
            </div>
                <div className="banner">
                    <div className="banner__img">
                        <img className={styles.gmailimageclass} src={"https://i.ibb.co/tCggX5y/Frame-1-1.png"} alt=""/>
                    </div>
                    <div className="banner__title">
                        <h1>Interactive Website</h1>
                        <h2>Built in Illustrator, Figma and Animated in AfterEffects</h2>
                    </div>
                    <div className="livelink">
                       <div className="label">
                           <h1>Live Link</h1>
                       </div>
                       <div className="main__link">
                            <a href="https://iat313finalproject.wixsite.com/mercymedical"></a>
                       </div>
                    </div>
                </div>
           
        </div>
    )
}

export default GoreDrawing
