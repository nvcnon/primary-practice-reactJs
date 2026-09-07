import React from 'react';
import style from './articlePage.module.css'
import pic from '../../assets/images/images.png'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ArticlePage = () => {
    
    const [state, setstate] = useState({})

    const params = useParams()
    
    useEffect(() => {
        
        axios.get(`http://localhost:8000/articles/${params.id}`).then((result)=>{
            console.log(result.data)
            setstate(result.data)
        }).catch((error) => {
            console.log(error)
        })

    }, []);

    return (
        <div>
            <Navbar title='Article site' />
            
            <div className={style.articleWrapper}>
                <div className='container'>

                    <h1>{state.title}</h1>

                    <div className={style.articleInfo}>
                        <span>تاریخ :‌ {state.date}</span>
                        <span>نویسنده : {state.Author}</span>
                        <span>مدت زمان خواندن : {state.readingTime} دقیقه </span>
                    </div>

                    <img src={state.imageUrl} alt="pic" />
                    
                    <p>{state.content}</p>

                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default ArticlePage;
