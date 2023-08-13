import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Icon from 'components/icon/Icon';
import './columnForm.scss';
import { useParams } from 'react-router';
import { addNewColumn } from 'redux/workplace/workplace-operation';
import { editColumnById } from 'redux/workplace/workplace-operation';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
  const { title, id, closeModal } = props;
  const theme = useSelector(selectCurrentTheme);
  const [error, setError] = useState('');
  const [columnName, setColumnName] = useState(title || '');
  const { boardName } = useParams();
  const dispatch = useDispatch();

  const onSubmit = e => {
    const InputTitle = e.target.elements.title.value;
    e.preventDefault();

    if (InputTitle === '') {
      setError('Required');
      return;
    } else if (title && id) {
      if (InputTitle === title) {
        closeModal();
        return;
      }
      dispatch(
        editColumnById({
          name: InputTitle,
          id: id,
        })
      );
      closeModal();
    } else {
      dispatch(addNewColumn({ idBoard: boardName, newColumn: InputTitle }));
      closeModal();

      return;
    }
    closeModal();
  };

  return (
    <form className="columnForm" onSubmit={onSubmit}>
      <p className={`columnTitle theme-${theme}`}>
        {!title ? 'Add' : 'Edit'} column
      </p>
      <div className="columnInputWrapper">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={`titleInput theme-${theme}`}
          value={columnName}
          required
          minLength="1"
          maxLength="25"
          onChange={e => setColumnName(e.target.value)}
        />
        {error && <p className={`errorMessage theme-${theme}`}>{error}</p>}
      </div>
      <button className={`columnButton theme-${theme}`} type="submit">
        <span className={`columnIcon theme-${theme}`}>
          <Icon id={'plus'} width={14} height={14} />
        </span>
        {!title ? 'Add' : 'Edit'}
      </button>
    </form>
  );
};

export default ColumnForm;
