import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import ContactRow from './components/contactRow';
import { useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([])
  const [SelectedContactId, SetSelectedContactID] = useState(null)
  const featuredContent = contacts.find((contact) => contact.id === SelectedContactId)

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result)
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts()
  }, []);
  return (
    <>
    <div className='table-container'>
      <ContactList contacts={contacts} SetSelectedContactID={SetSelectedContactID}/>
    </div>
    {SelectedContactId && (
      <div className='selected-info'>
        {featuredContent.name}
        {featuredContent.email}
        {featuredContent.phone}
        {featuredContent.catchphrase}
      </div>
    )}
    </>
    )}


export default App

