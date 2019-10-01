import React from 'react';

const validationComponent = (props) => {
    let textCount = props.textCount;
    let output = textCount >= 5 ? 'Text Long Enough' : 'Text Too Short';
    return(
        <p>{output}</p>
    )
}

export default validationComponent;