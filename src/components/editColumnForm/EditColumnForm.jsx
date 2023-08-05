// import { themeState } from '../../redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import Icon from 'components/icon/Icon';
import './editColumnForm.scss';

const EditColumnForm = ({ title }) => {
  // const theme = useSelector(themeState);
  const theme = useSelector(selectCurrentTheme);
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

  return (
    <form className="editColumnForm" onSubmit={onSubmit}>
      <p className={`editColumnTitle theme-${theme}`}>Edit column</p>
      <div className="editColumnInputWrapper">
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
        className={`editButton theme-${theme}`}
        type="submit"
        // onSubmit={handleColumnButtonClick}
      >
        <span className={`editIcon theme-${theme}`}>
          <Icon id={'plus'} width={14} height={14} />
        </span>
        Edit
      </button>
    </form>
  );
};

export default EditColumnForm;
