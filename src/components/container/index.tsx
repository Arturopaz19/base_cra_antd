import { FC } from "react";

interface ContainerPropsI {
    children: any;
    className?: string;
    style?: any;
}

const Container:FC<ContainerPropsI> = ({ children, className, style }) => {
    return (
        <div className={`container ${className}`} style={style}>
            {children}
        </div>
    )
}
export default Container;