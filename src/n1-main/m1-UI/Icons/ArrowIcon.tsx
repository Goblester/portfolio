import React from "react";


type PropsType = {
    size?: number | string;
    className?: string;
    color?: string;
};

export const ArrowIcon: React.FC<PropsType> = ({size = 25, className, color= '#000000'}) => {

    return (
        <svg className={className} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width={size} height={size}>
            <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/>
        </svg>
    )
}