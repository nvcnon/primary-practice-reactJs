import style from './input.module.css'

const Input = (props) => {
    
    return (
        <div>
            <div className={style.inputWrapper}>
                <label htmlFor="">{props.label}</label>
                <input 
                    name={props.name}
                    onChange={props.handleChange}
                    type="text" />
            </div>
        </div>
    );
}

export default Input;
