import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const People = props => {

    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                setData({error: "ERROR: Live long and prosper."})
            });
    }, [id]);

    return (
        data.error ?
            <h1>{data.error}</h1> :
            <div>
                <h1>People: {data.name}</h1>
                <p>
                    Height: {data.height}
                    <br />
                    Mass: {data.mass}
                    <br />
                    Skin color: {data.skin_color}
                    <br />
                    Hair Color: {data.hair_color}
                </p>
            </div>
    );

};

export default People;