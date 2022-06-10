import { Button as AntButton, ButtonProps } from "antd";

interface ButtonPropsI extends ButtonProps {
    children: any;
}

const Button = ({ children, ...props }: ButtonPropsI) => {
    return (
        <AntButton {...props}>{children}</AntButton>
    )
}
export default Button;