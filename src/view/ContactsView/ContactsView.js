import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Container from 'components/Container/Container';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';

import '../ContactsView/ContactsView.css';

function ContactsView() {
  const contacts = useSelector(contactsSelectors.filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.delContacts(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Form />
      <Filter />
      <ul className="contact-list">
        {contacts.map(({ id, name, number }) => {
          return (
            <li className="contact-list__item" key={id}>
              <p className="contact-list__text">{name}</p>
              <p className="contact-list__text">{number}</p>
              <button className="button" id={id} onClick={() => onDelete(id)}>
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(ContactsView);
