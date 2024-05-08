import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function App() {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [],);
  const [filter, setFilter] = useState('');
    
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
  const visibleContacts  = ()=> contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = contact => {
    setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]);
  }

  const deleteContact = (id) => {
    setContacts(prevState =>
    prevState.filter(contact => contact.id !== id))
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App;
