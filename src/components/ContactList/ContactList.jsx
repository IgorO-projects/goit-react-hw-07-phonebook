import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { fetchContacts, deletedContact } from '../../redux/actions/phonebook-operations';
import { Component } from 'react';
import{ getFilteredContacts } from '../../redux/actions/phonebook-selectors';

class ContactList extends Component {
  
  componentDidMount() {
    this.props.fetchedContacts()
  }

  render () {
    return (
      <ul className={styles.list}>
        {this.props.renderedContacts.map(contact => {
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
              onClick={this.props.deletedContactbyId}
              >delete</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

ContactList.propTypes = {
    renderedContacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  renderedContacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deletedContactbyId: event => {dispatch(deletedContact(event.currentTarget.id))},
  fetchedContacts: () => {dispatch(fetchContacts())},
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// const mapStateToProps = state => {
//   const { contacts } = state;
  
//   if(contacts.filter) {
//     const normalizedFilter = contacts.filter.toLowerCase(); 
//     const filtredContacts = contacts.items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

//     return {
//       renderedContacts: filtredContacts,
//     }
//   }  

//   return {
//     renderedContacts: contacts.items,
//   }
// }