import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { deletedContact } from '../../redux/actions/phonebook-actions';

const ContactList = ({ renderedContacts, deletedContactbyId }) => {
    return (
        <ul className={styles.list}>
          {renderedContacts.map(contact => {
            return (
              <li 
              className={styles.list__item}
              key={contact.id}>
                <span
                className={styles.list__text}
                >{contact.name}: {contact.number}</span>
                <button
                id={contact.id}
                className={styles.list__button}
                type="button"
                onClick={deletedContactbyId}
                >delete</button>
              </li>
            )
          })}
        </ul>
    )
}

ContactList.propTypes = {
    renderedContacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { contacts } = state;
  
  if(contacts.filter) {
    const normalizedFilter = contacts.filter.toLowerCase(); 
    const filtredContacts = contacts.items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return {
      renderedContacts: filtredContacts,
    }
  }  

  return {
    renderedContacts: contacts.items,
  }
 
}

const mapDispatchToProps = dispatch => ({
  deletedContactbyId: event => {dispatch(deletedContact(event.currentTarget.id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);