import React from 'react';
import style from './navbar.module.css'

const Navbar = (props) => {
    
    // const name = 'Article site'

    return (
        <div className={style.headerWrapper}>
            <div className='container'>
                <div className={style.header}>

                    <h3>{props.title}</h3>

                    <ul>
                        <li>لیست مقالات</li>
                        <li>مقاله جدید</li>
                        <li>درباره</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
