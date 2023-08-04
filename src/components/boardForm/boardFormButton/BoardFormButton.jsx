import React from 'react';
import Icons from '../../../images/svg/icons_sprite_Board.svg';
import './boardFormButton.scss';

const BoardFormButton = ({ currentTheme, submitForm, ...props }) => {
  // console.log(props);
  return (
    <div
      role="button"
      className={`boardButtonSubmit theme-${currentTheme}`}
      onClick={submitForm}
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
      {/* {props.isSubmitting ? 'submitting' : 'Create'} */}
      Create
    </div>
  );
};

export default BoardFormButton;
