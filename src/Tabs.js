import React from 'react'
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {useState} from "react"
import './Tabs.css'
import styles from './features/Counter.module.css';
import {useSelector} from "react-redux"
import { codeClickedColorOn, codecolorSelector, IsCodeColorOn,codingClickedOn,UiClickedOn,UiClickedOff,codingClickedOff ,codingSelector,UiSelector} from "./features/onClickContainerSlice";
 
import Container from './Container';
import ContainerUI from './ContainerUI';
import Footer from './Footer';

function Tabs() {

    const dispatch = useDispatch();
    const codingcontainerSelectorOn = useSelector(codingSelector);
    const UIcontainerSelectorOn = useSelector(UiSelector);
    const codecolorSelectorOn = useSelector(codecolorSelector);

    const [background, setBackground]= useState('blue')
    const [color, setColor] = useState("#424246");

    const styles={
        backgroundColor :`${background}`,
        color: "black",
        boxShadow: "4px 4px 20px rgb(134, 134, 134)",
        padding: "8px",

    }
    const setStyle = (background, color) => {
        setBackground(background);
        setColor(color);
      };
    return (
        <div className="tabs">
            <div class="project-heading">
                <div 
                    onMouseEnter={()=>{setStyle("black", "#fdfdfd")}}
                    className={codecolorSelectorOn && styles.activetabs}
                    onClick={()=>{dispatch(codingClickedOn(), dispatch(codeClickedColorOn()), dispatch(UiClickedOff()))}}
                    id="ux-heading">
                        <h1>CODING PROJECTS</h1>
                </div>
                <div 
                    className={styles.uitab} 
                    id="front-heading" 
                    onClick={()=>dispatch(UiClickedOn(), dispatch(codingClickedOff()))}>
                   <h1>UI/UX PROJECTS</h1>
                </div>
                <div className="tabs__nav">
                    <div className="nav__name">
                        <h1>Jastej Sehra</h1>
                        <h2>Frontend Developer | UI/UX Designer</h2>
                    </div>
                    
                </div>
            </div>
            {!codingcontainerSelectorOn && !UIcontainerSelectorOn && <Container/>}
            { codingcontainerSelectorOn ? <Container/> : null }
            { UIcontainerSelectorOn ? <ContainerUI/> : null}
            
            
        </div>
    )
}

export default Tabs
