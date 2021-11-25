import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from 'redux/contacts';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  console.log('value', value);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <p className="title-text">Find contacts by name</p>
      <input
        className="form__input"
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(contactsActions.filterContacts(e.currentTarget.value))
        }
      />
    </div>
  );
}
