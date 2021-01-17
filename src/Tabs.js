import React from 'react'
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {useState} from "react"
import './Tabs.css'
import styles from './features/Counter.module.css';
import {useSelector} from "react-redux"
import { codeClickedColorOn, codecolorSelector, IsCodeColorOn,
    codingClickedOn,UiClickedOn,UiClickedOff,codingClickedOff ,
    codingSelector,UiSelector, graphicSelector, graphicClickedOn, graphicClickedOff} from "./features/onClickContainerSlice";
 
import Container from './Container';
import ContainerUI from './ContainerUI';
import Footer from './Footer';
import ContainerGraphic from './ContainerGraphic'

function Tabs() {

    const dispatch = useDispatch();
    const codingcontainerSelectorOn = useSelector(codingSelector);
    const UIcontainerSelectorOn = useSelector(UiSelector);
    const graphicContainerSelectorOn = useSelector(graphicSelector);

    const [background, setBackground]= useState('blue')
    const [color, setColor] = useState("#424246");

   
    const setStyle = (background, color) => {
        setBackground(background);
        setColor(color);
      };

    const codingClickSet = () => {
        {dispatch(codingClickedOn(), dispatch(codeClickedColorOn()), dispatch(UiClickedOff()), dispatch(graphicClickedOff()))} 

    }
    const UIClickSet = () => {
        {dispatch(UiClickedOn(), dispatch(codingClickedOff()), dispatch(graphicClickedOff()))}
    }

    const GraphicClickSet = () => {
        {dispatch(graphicClickedOn(), dispatch(codingClickedOff()), dispatch(UiClickedOff()))}
    }
    return (
        <div className="tabs">
            <div class="project-heading">
                <div 
                    onMouseEnter={()=>{setStyle("black", "#fdfdfd")}}
                    className={codingcontainerSelectorOn && styles.activetabs}
                    onClick={codingClickSet}
                    id="ux-heading">
                        <h1>CODING PROJECTS</h1>
                </div>
                <div 
                    className={UIcontainerSelectorOn && styles.activetabsUI }
                    id="front-heading" 
                    onClick={UIClickSet}>
                   <h1>UI/UX PROJECTS</h1>
                </div>

                <div 
                    className={graphicContainerSelectorOn && styles.activetabsUI }
                    id="front-heading" 
                    onClick={GraphicClickSet}>
                   <h1>Graphic Design</h1>
                </div>

                <div className="tabs__nav">
                    <div className="nav__name">
                        <h1>Jastej Sehra</h1>
                        <h2>Frontend Developer | UI/UX Designer</h2>
                    </div>
                    
                </div>
            </div>
            {!codingcontainerSelectorOn && !UIcontainerSelectorOn && !graphicContainerSelectorOn && <Container/>}
            { codingcontainerSelectorOn ? <Container/> : null }
            { UIcontainerSelectorOn ? <ContainerUI/> : null}
            { graphicContainerSelectorOn ? <ContainerGraphic/> : null}
            
            
        </div>
    )
}

export default Tabs
