import React from 'react';

const userOutput = (props) => {
    return(
        <div>
            <p>Username: {props.username}</p>
            <p>{props.userOutputOne}</p>
            <p>{props.userOutputTwo}</p>
        </div>
    )
};

export default userOutput