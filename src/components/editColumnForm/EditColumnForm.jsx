import { themeState } from '../../redux/theme/themeSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Icon from 'components/icon/Icon';

const EditColumnForm = ({ title }) => {
  const theme = useSelector(themeState);
  const [error, setError] = useState('');
  const [columnName, setColumnName] = useState(title);
  const onSubmit = e => {
    const title = e.target.elements.title.value;
    e.preventDefault();
    if (title === '') {
      setError('Required');
      return;
    } else {
      console.log(columnName);
      e.target.reset();
      return;
    }
  };

  // const handleColumnButtonClick = e => {
  //   e.preventDefault();
  //   const columnName = e.target.elements.title.value;
  //   console.log(columnName);
  // };
  return (
    <form className="addColumnForm" onSubmit={onSubmit}>
      <p className={`addColumnTitle theme-${theme}`}>Edit column</p>
      <div className="addColumnInputWrapper">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={`titleInput theme-${theme}`}
          value={columnName}
          onChange={e => setColumnName(e.target.value)}
        />
        {error && <p className={`errorMessage theme-${theme}`}>{error}</p>}
      </div>
      <button
        className={`addButton theme-${theme}`}
        type="submit"
        // onSubmit={handleColumnButtonClick}
      >
        <span className={`addIcon theme-${theme}`}>
          <Icon id={'plus'} width={14} height={14} />
        </span>
        Add
      </button>
    </form>
  );
};

export default EditColumnForm;
