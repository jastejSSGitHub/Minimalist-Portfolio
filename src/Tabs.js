import React from 'react'
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"
import './Tabs.css'
import styles from './features/Counter.module.css';
import {useSelector} from "react-redux"
import {} from "./features/colorSlice";

import { pinkHoveredOn,codeProjectsClickedOn} from "./features/colorSlice"; 
function Tabs() {
    const dispatch = useDispatch();

    return (
        <div className="tabs">
            <div class="project-heading">
                <div  className={styles.lefttab} onClick={()=> dispatch(pinkHoveredOn())}   id="ux-heading"><h1>CODING PROJECTS</h1></div>
               {/*} <div id="front-heading"><h1>UI/UX PROJECTS</h1></div>*/}
                <div className="tabs__nav">
                    <div className="nav__name">
                        <h1>Jastej Sehra</h1>
                        <h2>Frontend Developer | UI/UX Designer</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tabs
