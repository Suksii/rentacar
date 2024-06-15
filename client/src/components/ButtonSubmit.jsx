import React from 'react';

const ButtonSubmit = ({label, onClick, className}) => {
    return (
            <button type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        if (onClick) {
                            onClick()
                        }}
                    }
                    className={`p-3 m-2 min-w-[140px] rounded-full outline-none text-xl uppercase tracking-wider font-semibold ${className}`}>
                {label}
            </button>
    );
};

export default ButtonSubmit;