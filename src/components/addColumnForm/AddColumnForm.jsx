// import { themeState } from '../../redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './addColumnForm.scss';
import Icon from 'components/icon/Icon';

const AddColumnForm = () => {
  // const theme = useSelector(themeState);
  const theme = useSelector(selectCurrentTheme);
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
        <span className={`addIcon theme-${theme}`}>
          <Icon id={'plus'} width={14} height={14} />
        </span>
        Add
      </button>
    </form>
  );
};

export default AddColumnForm;
