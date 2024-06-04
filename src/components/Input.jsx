import React from 'react';

const Input = ({
    type,
    placeholder,
    register,
    errorMessage
                }) => {

    return (
        <div className="flex flex-col w-full">
            <input type={type}
                   placeholder={placeholder}
                   className="py-3 px-4 m-2 bg-gray-500 bg-opacity-50 rounded-full outline-none text-xl placeholder-gray-900"
                   {...register}
            />
            {errorMessage && errorMessage.length > 0 && <p className="text-red-500 px-4">{errorMessage}</p>}
        </div>
    );
};

export default Input;