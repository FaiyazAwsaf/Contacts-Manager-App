import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className='contact-list'>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
        
    </div>

  );
};

export default ContactList;
