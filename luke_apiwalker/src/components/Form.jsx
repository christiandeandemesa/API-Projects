import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './Form.module.css';

const Form = props => {

  const [data, setData] = useState("people");
  const [id, setId] = useState(1);
  const history = useHistory();

  const search = e => {
    e.preventDefault();
    history.push(`/${data}/${id}`);
  };

  return (
    <form onSubmit = {search}>
      <label>Search for </label>
      <select onChange = {e => setData(e.target.value)} value = {data}>
        <option>people</option>
        <option>planets</option>
      </select>
      <label>id:</label>
      <input type = "number" onChange = {e => setId(e.target.value)} value = {id} min = {1} />
      <button>Submit</button>
    </form>
  );

}

export default Form;