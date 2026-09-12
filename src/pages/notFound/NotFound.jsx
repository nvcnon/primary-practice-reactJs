import style from './notFound.module.css'

const NotFound = () => {
    return (
        <div className={style.notFoundWrapper}>
            <div>
                <h1>404 Error</h1> 
                <h1>not found page</h1> 
            </div>
        </div>
    );
}

export default NotFound;
