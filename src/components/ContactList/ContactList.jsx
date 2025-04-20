import Contact from "../Contact/Contact.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';

export default function ContactList(){

    const dispatch = useDispatch();
    const items = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
  
    const filtered = items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return(
        <ul>
            {filtered.map((value) => (
                <li key={value.id}>
                    <Contact data={value} handleDelete={handleDelete}/>
                </li>
            ))}
        </ul>
    )
}