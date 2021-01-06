import React from 'react'
import { IconButton} from "@material-ui/core"
import styles from './features/Counter.module.css';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__icons__right">
                <div className="footer__left">
                    <IconButton >
                        <a href="//www.linkedin.com/in/jastej-sehra" className={styles.footericons}>LinkedIn</a>
                    </IconButton>
                    <IconButton >
                        <a href="https://github.com/jastejSSGitHub" className={styles.footericons}>GitHub</a>
                    </IconButton>
                    <IconButton>
                        <a className={styles.footericons}>Resume</a>
                    </IconButton>                    
                </div>
                <div className="footer__right">
                    <h2>Coded in React JS with Redux</h2>
                </div>
                
                
            </div>
        </div>
    )
}

export default Footer
