import React from 'react';
import { useParams } from 'react-router-dom';

const Word = props => {

    const {str} = useParams();
    const {strColor} = useParams();
    const {bkgdColor} = useParams();

    return (
        <h1 style = {{color: strColor, backgroundColor: bkgdColor}}>The word is: {str}</h1>
    );
    
}

export default Word;