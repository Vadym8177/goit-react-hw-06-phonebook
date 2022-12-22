import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.item}>
        {name}: {number}
        <button
          type="button"
          className={css.itemBtn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
