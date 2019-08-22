import React from 'react';

const Card = (props)=> {
    const{member} = props;
    return(
        <div>
            <div>{member.name}</div>
            <div>{member.email}</div>
            <div>{member.role}</div>
        </div>
    );
};

export default Card;