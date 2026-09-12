import style from './textArea.module.css'

const TextArea = (props) => {
    return (
        <div className={style.textAreaWrapper}>
            <label>{props.label}</label>
            <textarea onChange={props.handleChange}></textarea>
        </div>
    );
}

export default TextArea;
