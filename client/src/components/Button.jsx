import React from 'react';

const Button = ({label, onClick, className, type, disabled}) => {
    return (
        <button type={type ? type : "button"}
                onClick={onClick}
                disabled={disabled}
                className={`px-3 py-2 rounded-full outline-none text-xl uppercase tracking-wider font-semibold ${className}`}>
            {label}
        </button>
    );
};

export default Button;