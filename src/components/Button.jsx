import React from 'react';

const Button = ({label, onClick, className}) => {
    return (
            <button onClick={event => {event.preventDefault(); onClick()}}
                    className={`p-3 m-2 min-w-[140px] rounded-full outline-none text-xl uppercase tracking-wider font-semibold ${className}`}>
                {label}
            </button>
    );
};

export default Button;