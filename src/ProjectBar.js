import React from 'react'
import './ProjectBar.css'
import {useState} from "react"
import {closeSendMessage} from "./features/colorSlice";
import { useDispatch } from 'react-redux';

function ProjectBar({id, title, description, tag1, tag2,tag3, tag4, hovercolor, selected,tagcolor}) {
    const dispatch= useDispatch();

    const [isHovered,setIsHovered]= useState('white')
    
    const styles={
            backgroundColor : `${isHovered}`,
    }

    return (
       
        <div onClick="" onMouseEnter={()=>setIsHovered(hovercolor)} onMouseLeave={()=>setIsHovered('white')} id={id} style={styles} className={"list-item-container"}>
            <div className="item-heading-tag">
                <h1 className="heading">{title}</h1>
                <div style={{backgroundColor:`${tagcolor}`}}  className="round-tags">
                    <p>{tag1}</p>
                </div>
                <div style={{backgroundColor:`${tagcolor}`}} class="round-tags">
                    <p>{tag2}</p>
                </div>
                {tag3 && <div style={{backgroundColor:`${tagcolor}`}} class="round-tags">
                    <p>{tag3}</p>
                </div>}
                {tag4 && <div style={{backgroundColor:`${tagcolor}`}} class="round-tags">
                    <p>{tag4}</p>
                </div>}
                
                

            </div>
            <p  className="description">{description}</p>    
        </div>
    )
}

export default ProjectBar
