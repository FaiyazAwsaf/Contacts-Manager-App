import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const fetchContacts = async () => {
    const response = await axios.get('http://localhost:3005/contacts');
    setContacts(response.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3005/contacts/${id}`);
    fetchContacts();
  };

  const handleSave = () => {
    fetchContacts();
    setSelectedContact(null);
    setIsFormVisible(false);
  };

  const handleAddContact = () => {
    setSelectedContact(null);
    setIsFormVisible(true);
  };

  const handleSearch = (key) => {
    setSearchKey(key);
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchKey.toLocaleLowerCase()) || contact.email.toLowerCase().includes(searchKey.toLocaleLowerCase()))

  return (
    <div>
      <Header onAddContacts={handleAddContact} onSearch={handleSearch} />
      {
        isFormVisible ? (
          <ContactForm selectedContact={selectedContact} onSave={handleSave} />
        ) :
        <ContactList contacts={filteredContacts} onEdit={handleEdit} onDelete={handleDelete} />
      }
      
      
    </div>
  );
};

export default App;
