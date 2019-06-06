import React from 'react'
import {Link} from 'react-router-dom'
import Googleauth from '../Googleauth'
export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className='item'>Streamo</Link>
            <div className="right menu">
<Link to='/' className='item'>All streams</Link>
<Googleauth/>
            </div>
           
        </div>
    )
}
