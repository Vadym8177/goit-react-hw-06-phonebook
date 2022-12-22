import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filtration } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(filtration(e.currentTarget.value));
  };
  return (
    <label className={css.formLabel}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={filterContact}
        className={css.formInput}
      ></input>
    </label>
  );
};
