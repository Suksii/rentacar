import React, {useEffect, useState} from 'react';

const InputValidation = ({
    type,
    placeholder,
    register,
    errorMessage,
    className
                }) => {

    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (errorMessage && errorMessage.length > 0) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
            }, 3000);
            return () => clearTimeout(timer);
            } else {
            setShowError(false);
        }
    }, [errorMessage])

    return (
        <div className="flex flex-col w-full">
            <input type={type}
                   placeholder={placeholder}
                   className={`py-3 px-4 m-2 outline-none text-xl placeholder-gray-900 ${className}`}
                   {...register}
            />
            {showError && <p className="text-red-500 px-4">{errorMessage}</p>}
        </div>
    );
};

export default InputValidation;