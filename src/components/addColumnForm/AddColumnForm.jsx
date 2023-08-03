import { themeState } from '../../redux/theme/themeSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './addColumnForm.scss';

const AddColumnForm = () => {
  const theme = useSelector(themeState);
  const [error, setError] = useState('');
  const onSubmit = e => {
    const title = e.target.elements.title.value;
    if (title === '') {
      setError('Required');
      e.preventDefault();
      return;
    } else {
      e.target.reset();
      return;
    }
  };
  return (
    <form className="addColumnForm" onSubmit={onSubmit}>
      <p className={`addColumnTitle theme-${theme}`}>Add column</p>
      <div className="addColumnInputWrapper">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={`titleInput theme-${theme}`}
        />
        {error && <p className={`errorMessage theme-${theme}`}>{error}</p>}
      </div>
      <button className={`addButton theme-${theme}`} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddColumnForm;
