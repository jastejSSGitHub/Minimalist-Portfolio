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
                                    onMouseEnter={()=> dispatch(orangeHoveredOn())} 
                                    onMouseLeave={()=> dispatch(orangeHoveredOff())} 
                                    className="projectBar1">
                                    <a href="https://www.figma.com/proto/71GaizBVRX0PouJipYaCoH/Untitled?node-id=5%3A1996&scaling=scale-down-width" target="_blank">
                                    <ProjectBar 
                                            title="App Agency Website"
                                            description="UI/UX Design for the an App Developement Agency website."
                                            tag1="UI/UX Design"
                                            tag2="Interaction Design"
                                            hovercolor='#ff9100'
                                            tagcolor='#ffd037'
                                    />      
                                    </a>
                                </div>

                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(redHoveredOn())} 
                                    onMouseLeave={()=> dispatch(redHoveredOff())} 
                                    className="projectBar1">
                                    <a href="https://www.figma.com/proto/Aen0P9slbCnVs2u8iJzwwd/Untitled?node-id=33%3A2&scaling=scale-down-width" target="_blank">
                                    <ProjectBar 
                                            title="Esports Dashboard "
                                            description="UI/UX Design for the a employee management dashboard for a E-sports company."
                                            tag1="UI/UX Design"
                                            tag2="Prototype"
                                            tag3="Interaction Design"
                                            hovercolor='#005eaa'
                                            tagcolor='#a8d5fa'
                                    />      
                                    </a>
                                </div>

                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(yellowHoveredOn())} 
                                    onMouseLeave={()=> dispatch(yellowHoveredOff())} 
                                    className="projectBar1">
                                    <a href="https://www.figma.com/proto/tfv0FoU0rKGfGgYZATONoM/Untitled?node-id=23%3A135&scaling=scale-down-width" target="_blank">
                                    <ProjectBar 
                                            title="UI/UX prototype"
                                            description="UI/UX Design for the gaming company I worked for as a Frontend Developer"
                                            tag1="UI/UX Redesign"
                                            tag2="Mockup"
                                            tag3="Interaction Design"
                                            hovercolor='#057de2'
                                            tagcolor='#a8d5fa'
                                    />      
                                    </a>
                                </div>
                              
                                                         
                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(blueHoveredOn())} 
                                    onMouseLeave={()=> dispatch(blueHoveredOff())} 
                                    className="projectBar1">
                                    <a href="https://www.figma.com/proto/R8iCOcojcySbQGUpd4lHHT/Untitled?node-id=1%3A5&scaling=scale-down" target="_blank">
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
                        {projectFiveIsHoveredOpen &&
                        <div className={styles.imageboxappwebsite}>
                            <img className={styles.gmailimageclass} src={"https://i.ibb.co/64xcdcf/Macbook-Pro-Tilted-Screen-Mockup-3.png"} alt=""/>
                        </div>
                        }
                        {projectThreeIsHoveredOpen &&
                            <div className={styles.imagebox2}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/f0W4pbY/Ui3.png"} alt=""/>
                            </div>
                        }
                        {projectOneIsHoveredOpen &&
                            <div className={styles.imageboxdashboard}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/fxKHbfY/Macbook-Pro-Tilted-Screen-Mockup-2.png"} alt=""/>
                            </div>
                        }

                        {projectTwoIsHoveredOpen &&
                            <div className={styles.imagebox1}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/hc8PgG7/skip.png"} alt=""/>
                            </div>
                        }

                             

                        

                      

                            

                        
                    </div>
                </div>

            </Router>
            
        </div>
        
    )
}

export default ContainerUI
