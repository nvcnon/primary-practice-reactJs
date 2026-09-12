import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './createArticle.module.css'
import {useState, useEffect} from 'react'
import Input from '../../components/input/Input';
import TextArea from '../../components/textArea/TextArea';
import axios from 'axios';

const CreateArticle = () => {

    const [article, setArticle] = useState({
        title : '',
        date : '',
        readingTime : '',
        author : '',
        message : '',
        imageUrl: ''
    });
    
    const handleChangeAritcle = (e) => {

        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleChangeArticleMessage = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value
        }))
    }
    
    // console.log(article)    

    const handleCreateNewArticle = () => {
        axios.post('http://localhost:8000/articles',
                    {
            "id": 10,
            "imageUrl": article.imageUrl,
            "title": article.title,
            "readingTime": 13,
            "date": article.date,
            "Author": article.author,
            "content": article.message
        }
        )
    }

    return (
        <>
            <Navbar /> 
            <div className={style.CreateArticlePage}>
                <div className='container'>
                    <h1>ساخت مقاله</h1>
                    
                    <Input label='عنوان' name='title' handleChange={handleChangeAritcle} /> 
                    <Input label='تاریخ' name='date' handleChange={handleChangeAritcle} />
                    <Input label='نویسنده' name='author' handleChange={handleChangeAritcle} />
                    <Input label='مدت زمان خواندن' name='readingTime' handleChange={handleChangeAritcle} />  
                    <Input label='درس عکس' name='imageUrl' handleChange={handleChangeAritcle} />  

                    <TextArea label='متن' handleChange={handleChangeArticleMessage} /> 

                    <div className={style.buttonWrapper}>
                        <button onClick={handleCreateNewArticle}>ارسال پست</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CreateArticle;
