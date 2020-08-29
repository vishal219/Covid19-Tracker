import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
const styles=makeStyles((theme)=>{

})
export default function Header() {
    const classes=styles()
    return (
        
             <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo ">Covid-Info</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <Link to="/india">
                            India
                        </Link>
                    </ul>
                </div>
            </nav>
        
    )
}
