import React,{useRef, useState, useEffect, useCallback} from 'react'
import './ContainerUI.css'
import ProjectBar from './ProjectBar'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { useHistory} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {projectTwoIsHovered, projectOneIsHovered, projectThreeIsHovered,
projectFourIsHovered, projectFiveIsHovered, projectSixIsHovered, projectZeroIsHovered, DarkModeIsOn, codingContainerIsClicked} from "./features/colorSlice"; //selectors
import {darkModeOff, darkModeOn,blueHoveredOff, blueHoveredOn, redHoveredOn,redHoveredOff, 
yellowHoveredOn,yellowHoveredOff,greenHoveredOn, greenHoveredOff,
 orangeHoveredOn, orangeHoveredOff, pinkHoveredOn, pinkHoveredOff}
from "./features/colorSlice"; //reducers- states manipulators with dispatch
import styles from './features/Counter.module.css';
import hoverphoto from './images/hover.png'

let linkedinUrl="https://www.linkedin.com/in/jastej-sehra/";

function ContainerGraphic() {
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
    
    const history = useHistory();
    function handleClick() {
        history.push("/GoreDrawing");
      }
    return (
        
        <div className="ContainerUI">
            <div className="project-container">
                    <div className="project-container-left">
                        <div  className="project-list">
                                <div data-aos="fade-up"
                                     onMouseEnter={()=> dispatch(redHoveredOn())} 
                                     onMouseLeave={()=> dispatch(redHoveredOff())} 
                                     className="projectBar1"
                                >   {/* I want this ProjectBar component to open the GoreDrawing.js component on click*/}
                                    {/*<a href="https://www.figma.com/proto/71GaizBVRX0PouJipYaCoH/Untitled?node-id=5%3A1996&scaling=min-zoom" target="_blank">*/}
                                    <Link to='/abc'>
                                    <ProjectBar 
                                            title="Interactive Website"
                                            description="A horror game-like website, with a gore story with three endings. All illustrtaions drawn from scratch to high fidelity images"
                                            tag1="Interaction Design"
                                            tag2="Illustrator"
                                            tag3="AfterEffects"
                                            hovercolor='#0a7fb6'
                                            tagcolor=' #b7f2fa'
                                            
                                    />      
                                    {/*</a>*/}
                                    </Link>
                                </div>
                                                         
                                <div data-aos="fade-up"
                                    onMouseEnter={()=> dispatch(blueHoveredOn())} 
                                    onMouseLeave={()=> dispatch(blueHoveredOff())} 
                                    className="projectBar1">
                                    <a  href="https://www.figma.com/proto/R8iCOcojcySbQGUpd4lHHT/Untitled?node-id=1%3A5&scaling=scale-down" target="_blank">
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
                            <div data-aos="fade-down" className={styles.imagebox4}>
                                <div className="hovertextandimage">
                                    <h1 className={styles.hovertext}>Hover and Scroll on the list to see my miscellaneous Graphic projects </h1>
                                    <img className={styles.imageemoticon} src={hoverphoto}></img>
                                </div> 
                            </div>}
                        
                        {projectOneIsHoveredOpen &&
                            <div className={styles.imagebox0}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/tCggX5y/Frame-1-1.png"} alt=""/>
                            </div>
                        }

                        {projectTwoIsHoveredOpen &&
                            <div className={styles.imagebox1}>
                                <img className={styles.gmailimageclass} src={"https://i.ibb.co/hc8PgG7/skip.png"} alt=""/>
                            </div>
                        }

                            
                    </div>
                </div>

            
        </div>
        
    )
}

export default ContainerGraphic
