import {Input as AntdInput, InputProps} from "antd";

interface InputPropsI extends InputProps {
    label?: any;
    labelClassName?: string;
    groupClassName?: string;
    text?: any;
}

const Input = ({ groupClassName, label, labelClassName, text, ...props}:InputPropsI) => {
    return (
        <div className={groupClassName}>
            <label className={labelClassName}>{label}</label>
            <AntdInput {...props}/>
            {text && <small>{text}</small>}
        </div>
    )
}
export default Input;