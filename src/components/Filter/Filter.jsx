import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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
