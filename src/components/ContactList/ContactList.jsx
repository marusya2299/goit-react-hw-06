import Contact from "../Contact/Contact.jsx";

export default function ContactList({values, onDelete}){
return(
    <ul>
        {values.map((value) => (
            <li key={value.id}>
                <Contact data={value} onDelete={onDelete}/>
            </li>
        ))}
    </ul>
)
}