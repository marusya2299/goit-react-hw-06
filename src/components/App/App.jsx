import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

export default function App(){
  return(
    <div>
      <h1>Phonebook</h1>
        <SearchBox />
        <ContactForm />
        <ContactList />
    </div>

  )
}