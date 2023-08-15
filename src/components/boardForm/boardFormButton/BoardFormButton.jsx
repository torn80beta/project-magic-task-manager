import React from 'react';
import Icons from '../../../images/svg/icons_sprite_Board.svg';
import './boardFormButton.scss';

const BoardFormButton = ({ currentTheme, submitForm, boardId, ...props }) => {
  return (
    <div
      role="button"
      className={`boardButtonSubmit theme-${currentTheme}`}
      onClick={submitForm}
      aria-label={boardId ? 'Edit' : 'Create'}
    >
      <span className={`boardButtonIcon_wrapper theme-${currentTheme}`}>
        <svg
          className={`boardButtonIcon theme-${currentTheme}`}
          width="14"
          height="14"
        >
          <use href={`${Icons}#plus`} />
        </svg>
      </span>
      {boardId ? 'Edit' : 'Create'}
    </div>
  );
};

export default BoardFormButton;
