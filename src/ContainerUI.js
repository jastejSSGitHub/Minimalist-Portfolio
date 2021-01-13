import React,{useRef, useState, useEffect} from 'react'
import './ContainerUI.css'
import ProjectBar from './ProjectBar'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {projectTwoIsHovered, projectOneIsHovered, projectThreeIsHovered,
projectFourIsHovered, projectFiveIsHovered, projectSixIsHovered, projectZeroIsHovered, DarkModeIsOn, codingContainerIsClicked} from "./features/colorSlice"; //selectors

import {darkModeOff, darkModeOn,blueHoveredOff, blueHoveredOn, redHoveredOn,redHoveredOff, 
yellowHoveredOn,yellowHoveredOff,greenHoveredOn, greenHoveredOff,
 orangeHoveredOn, orangeHoveredOff, pinkHoveredOn, pinkHoveredOff}
from "./features/colorSlice"; //reducers- states manipulators with dispatch
import styles from './features/Counter.module.css';

import hoverphoto from './images/hover.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

let linkedinUrl="https://www.linkedin.com/in/jastej-sehra/";

function ContainerUI() {
    const [isHovered,setIsHovered]= useState('red')
    const projectZeroIsHoveredOpen = useSelector(projectZeroIsHovered);
    const projectTwoIsHoveredOpen = useSelector(projectTwoIsHovered);
    const projectOneIsHoveredOpen = useSelector(projectOneIsHovered);
    const projectThreeIsHoveredOpen = useSelector(projectThreeIsHovered);
    const projectFourIsHoveredOpen = useSelector(projectFourIsHovered);
    const projectFiveIsHoveredOpen = useSelector(projectFiveIsHovered);
    const projectSixIsHoveredOpen = useSelector(projectSixIsHovered);

    const DarkModeTurnedOn = useSelector(DarkModeIsOn);



    const dispatch = useDispatch();

    return (
        
        <div className="ContainerUI">
            <Router>
            <div className="project-container">
                    <div className="project-container-left">
                        <div  className="project-list">

                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(redHoveredOn())} 
                                    onMouseLeave={()=> dispatch(redHoveredOff())} 
                                    className="projectBar1">
                                    <a href="https://clone-9cd20.web.app/ ">
                                    <ProjectBar 
                                            title="App Redesign"
                                            description="Case Study and a UI/UX Redesign of the food app Skip The Dishes. From research to final prototype mockup."
                                            tag1="Case Study"
                                            tag2="UI/UX Analysis"
                                            tag3="Interaction Design"
                                            hovercolor=' #b41c07'
                                            tagcolor='#ffaeae'
                                    />      
                                    </a>
                                </div>
                                                         
                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(blueHoveredOn())}  
                                    onMouseLeave={()=> dispatch(blueHoveredOff())}  
                                    className="projectBar2">
                                    <a href="https://www.sphvere.com//">
                                    <ProjectBar 
                                        title="Webapp Redesign"
                                        description="My team's startup website for a service that that lets creative people connect and 
                                        join new projects and meet other creative developers and designers."
                                        tag1="Case Study"
                                        tag2="UI/UX Redesign"
                                        tag3="Figma"
                                        tag4="Adobe XD"
                                        hovercolor="#3792cf"
                                        tagcolor="#b2e3fa"
                                        />
                                    </a>
                                </div>
                                
                                
                                
                                
                            </div>
                    </div>
                    <div className="project-container-right">
                        {!projectOneIsHoveredOpen && !projectTwoIsHoveredOpen && !projectThreeIsHoveredOpen &&
                         !projectFourIsHoveredOpen && !projectFiveIsHoveredOpen && !projectSixIsHoveredOpen && !DarkModeTurnedOn &&
                            <div data-aos="fade-down" className={styles.imagebox5}>
                                <div className="hovertextandimage">
                                    <h1 className={styles.hovertext}>Hover and Scroll on the list to see my UI/UX projects </h1>
                                    <img className={styles.imageemoticon} src={hoverphoto}></img>
                                </div> 
                            </div>}
                        
                        {projectOneIsHoveredOpen &&
                            <div className={styles.imagebox1}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/hc8PgG7/skip.png"} alt=""/>
                            </div>
                             }

                        {projectTwoIsHoveredOpen &&
                            <div className={styles.imagebox2}>
                                <img className={styles.sphvereimageclass} src={"https://i.ibb.co/XyP4F51/Sphvere.webp"} alt=""/>
                            </div>}

                      

                            

                        
                    </div>
                </div>

            </Router>
            
        </div>
        
    )
}

export default ContainerUI
