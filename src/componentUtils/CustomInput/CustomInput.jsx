import React from 'react';

const CustomInput = ({placeholder, callback}) => {
    return (
        <>
            <input onChange={callback} placeholder={placeholder}/>
        </>
    );
};

export default CustomInput;
