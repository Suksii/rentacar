import React from 'react';

const Button = ({label, onClick, className, type}) => {
    return (
        <button type={type ? type : "button"}
                onClick={onClick}
                className={`p-3 min-w-[140px] rounded-full outline-none text-xl uppercase tracking-wider font-semibold ${className}`}>
            {label}
        </button>
    );
};

export default Button;