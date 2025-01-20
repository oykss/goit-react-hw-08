import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { selectStatusFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatusFilter);

  const [searchTerm, setSearchTerm] = useState(status);

  const handleSearch = useDebouncedCallback(param => {
    dispatch(changeFilter(param));
  }, 300);

  const handleChange = e => {
    const param = e.target.value;
    setSearchTerm(param);
    handleSearch(param);
  };

  return (
    <label className={css.wrap}>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Find name"
      />
    </label>
  );
}
