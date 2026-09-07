import React from 'react';
import style from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    
    // const name = 'Article site'

    return (
        <div className={style.headerWrapper}>
            <div className='container'>
                <div className={style.header}>

                    <Link to="/"><h3>{props.title}</h3></Link>

                    <ul>
                        <Link to="/"><li>لیست مقالات</li></Link>
                        <Link to="/about"><li>درباره</li></Link>
                        <Link to="/create-article"><li>ساخت مقاله</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
