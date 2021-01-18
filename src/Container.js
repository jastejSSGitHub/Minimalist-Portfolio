import React,{useRef, useState, useEffect} from 'react'
import './Container.css'
import ProjectBar from './ProjectBar'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"

import {projectTwoIsHovered, projectOneIsHovered, projectThreeIsHovered,
projectFourIsHovered, projectFiveIsHovered, projectSixIsHovered, projectZeroIsHovered, DarkModeIsOn} from "./features/colorSlice"; //selectors

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

function Container() {
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
        
        <div className="Container">
            <Router>
            <div className="project-container">
                    <div className="project-container-left">
                        <div  className="project-list">

                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(darkModeOn())} 
                                    onMouseLeave={()=> dispatch(darkModeOff())} 
                                    className="projectBar1"
                                    >
                                    <a href="https://covid-19-tracker-48fd8.web.app/" target="_blank">
                                        <ProjectBar 
                                                    title="Covid-19 Tracker"
                                                    description="A realtime and responsive Covid-19 Tracker with data visualization, displays cases all over the world with
                                                    an ability to show each county's covid details"
                                                    tag1="React"
                                                    tag2="Chart JS"
                                                    tag3="Firebase"
                                                    tag4="React-Router"
                                                    tag5="Material UI"
                                                    hovercolor='#0a7fb6'
                                                    tagcolor=' #b7f2fa'
                                            />     
                                    </a>
                                     
                                </div>
                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(redHoveredOn())} 
                                    onMouseLeave={()=> dispatch(redHoveredOff())} 
                                    className="projectBar1">
                                    <a href="https://clone-9cd20.web.app/ " target="_blank">
                                    <ProjectBar 
                                            title="Gmail Web App "
                                            description="A dynamic emulation of the Gmail email app, with Google Authentication, and email state management for learning purposes"
                                            tag1="React"
                                            tag2="Redux"
                                            tag3="Firebase"
                                            tag4="React-Router"
                                            hovercolor=' #b41c07'
                                            tagcolor='#ffaeae'
                                    />      
                                    </a>
                                </div>
                                                         
                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(blueHoveredOn())}  
                                    onMouseLeave={()=> dispatch(blueHoveredOff())}  
                                    className="projectBar2">
                                    <a href="https://www.sphvere.com//" target="_blank">
                                    <ProjectBar 
                                        title="Sphvere Web App"
                                        description="My team's startup website for a service that that lets creative people connect and 
                                        join new projects and meet other creative developers and designers."
                                        tag1="React"
                                        tag2="Gatsby"
                                        tag3="GraphQL"
                                        tag4="Styled-Components"
                                        hovercolor="#3792cf"
                                        tagcolor="#b2e3fa"
                                        />
                                    </a>
                                </div>
                                
                                <div  
                                    onMouseEnter={()=> dispatch(yellowHoveredOn())}  
                                    onMouseLeave={()=> dispatch(yellowHoveredOff())} 
                                    href={linkedinUrl}
                                    className="projectBar3">
                                    <a href="https://linkedin-clone-47bb4.web.app/" target="_blank">
                                        <ProjectBar 
                                            title="LinkedIn Web App"
                                            description="A clone of the recuiting website, with secure authentication, and 
                                            social networking feature with ability to make dynamic posts stored in Firebase backend"
                                            tag1="React"
                                            tag2="Redux"
                                            tag3="Firebase"
                                            tag4="Material UI"
                                            hovercolor=" #dda919"
                                            tagcolor="#ffcd81"
                                            />
                                    </a>
                                </div>
                               
                                
                                {/*<div 
                                    onMouseEnter={()=> dispatch(greenHoveredOn())}  
                                    onMouseLeave={()=> dispatch(greenHoveredOff())}
                                    className="projectBar4">
                                  <a href="">
                                    <ProjectBar 
                                        title="HealthSupps"
                                        description="Built in PHP, HealthSupps is a Full stack ecommerce website for supplements for good health. 
                                        UI is made in Figma, and programmed PHP, powered by MySQL database"
                                        tag1="PHP"
                                        tag2="MySQL"
                                        tag3="Bootsrap"
                                        hovercolor="#4ec038f3"
                                        tagcolor="#c2fcb4"
                                        />
                                        </a>
                                </div>*/}

                                <div 
                                    onMouseEnter={()=> dispatch(orangeHoveredOn())} 
                                    onMouseLeave={()=> dispatch(orangeHoveredOff())} 
                                    className="projectBar5">
                                <a href="https://clone-a861a.web.app/" target="_blank">
                                    <ProjectBar 
                                        title="Amazon React"
                                        description="Emulation of Amazon shopping webapp with firebase authentication, and dynamic cart functionality
                                        for learning purposes"
                                        tag1="React"
                                        tag2="Firebase"
                                        tag3="material UI"
                                        hovercolor="#f36100"
                                        tagcolor="#ffb773"
                                        />
                                </a>
                                </div>

                                <div
                                    style={{paddingBottom: 30 + 'px' } }
                                    onMouseEnter={()=> dispatch(pinkHoveredOn())} 
                                    onMouseLeave={()=> dispatch(pinkHoveredOff())} 
                                    className="projectBar5">
                                <a href="https://airbnb-clone-10ff9.web.app/" target="_blank">
                                    <ProjectBar 
                                        title="AirBnb Webapp"
                                        description="Emulation of one of my favourite User Interfaces of all time, AirBnb's website. Build in React, has a functional date picker 
                                        and a 'search for listings' page that emulates the experience of the official website"
                                        tag1="React"
                                        tag2="Firebase"
                                        tag3="material UI"
                                        tag4="Date Picker"

                                        hovercolor="#c91616"
                                        tagcolor="#f3adad"
                                        />
                                </a>
                                </div>
                                
                                
                            </div>
                    </div>
                    <div className="project-container-right">
                        {!projectOneIsHoveredOpen && !projectTwoIsHoveredOpen && !projectThreeIsHoveredOpen &&
                         !projectFourIsHoveredOpen && !projectFiveIsHoveredOpen && !projectSixIsHoveredOpen && !DarkModeTurnedOn &&
                            <div data-aos="fade-down" className={styles.imagebox2}>
                                <div className="hovertextandimage">
                                    <h1 className={styles.hovertext}>Hover and Scroll on the list to see my coding projects </h1>
                                    <img className={styles.imageemoticon} src={hoverphoto}></img>
                                </div> 
                            </div>}
                        {DarkModeTurnedOn &&
                        <div className={styles.imagebox0}>
                            <img className={styles.gmailimageclass} src={"https://i.ibb.co/TTLj8PN/Tacker2.webp"} alt=""/>
                        </div>
                            }
                        {projectOneIsHoveredOpen &&
                            <div className={styles.imagebox1}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/FBF0Xtz/Gmail.webp"} alt=""/>
                            </div>
                             }

                        {projectTwoIsHoveredOpen &&
                            <div className={styles.imagebox2}>
                                <img className={styles.sphvereimageclass} src={"https://i.ibb.co/XyP4F51/Sphvere.webp"} alt=""/>
                            </div>}

                        {projectThreeIsHoveredOpen &&
                            <div className={styles.imagebox3}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/r499FrJ/Linkedin.webp"} alt=""/>

                            </div>}
                        
                        {projectFourIsHoveredOpen &&
                            <div className={styles.imagebox4}>
                                <img className={styles.sphvereimageclass} src={"https://i.ibb.co/nLZ4jMX/Health.webp"} alt=""/>

                            </div>}

                        {projectFiveIsHoveredOpen &&
                            <div className={styles.imagebox5}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/80ydPPY/Amazon-1.webp"} alt=""/>

                            </div>}

                        {projectSixIsHoveredOpen &&
                            <div className={styles.imagebox6}>
                                <img className={styles.sphvereimageclass} src={"https://i.ibb.co/G5JrFGg/air.webp"} alt=""/>

                            </div>}

                            

                        
                    </div>
                </div>

            </Router>
            
        </div>
        
    )
}

export default Container
