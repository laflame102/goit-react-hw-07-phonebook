import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};
