import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './createArticle.module.css'

const CreateArticle = () => {
    return (
        <>
            <Navbar /> 
            <div className={style.CreateArticlePage}>
                <div className='container'>
                    <h1>ساخت مقاله</h1>
                </div>
            </div>
        </>
    );
}

export default CreateArticle;
