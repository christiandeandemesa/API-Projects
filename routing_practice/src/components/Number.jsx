import React from 'react';
import { useParams } from 'react-router-dom';

const Number = props => {

    const {int} = useParams();

    return (
        <h1>The number is: {int}</h1>
    );
    
}

export default Number;