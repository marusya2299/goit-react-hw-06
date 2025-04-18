import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

import { useState, useEffect} from 'react';

import data from "../../values.json";

import * as Yup from "yup";
import { nanoid } from 'nanoid';

export default function App(){

  const [values, setValues]=useState(()=>{
    const savedValues = window.localStorage.getItem("contacts");
    return savedValues ? JSON.parse(savedValues) : data;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(values));
  }, [values]);
  
  const deleteValue = (valueId) => {
    setValues((prevValue) => {
      return prevValue.filter((value) => value.id !== valueId);
    });
  };

  const addValue = (nameValue, numberValue) => {
    const idValue=nanoid();
    const newValue = { id: idValue, name: nameValue, number: numberValue };
    setValues((prevValues) => [...prevValues, newValue]);
  }


  const visibleValues = values.filter((value) =>
    value.name.toLowerCase().includes(filter.toLowerCase())
  );

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
  });

  return(
    <div>
      <h1>Phonebook</h1>
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactForm validationSchema={validationSchema} addValue={addValue} />
        <ContactList values={visibleValues} onDelete={deleteValue}/>
    </div>

  )
}