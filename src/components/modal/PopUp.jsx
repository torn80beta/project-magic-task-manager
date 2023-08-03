import React from 'react';
import Modal from 'react-modal';
import { themeState } from 'redux/theme/themeSlice';
import { useSelector } from 'react-redux';

import './popup.scss';
Modal.setAppElement('#root');

const PopUp = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { children, data } = props;
  const currentTheme = useSelector(themeState);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // something after modal open
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className={`open-modal-button theme-${currentTheme}`}
        onClick={openModal}
      >
        {data}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={`modal theme-${currentTheme}`}
        overlayClassName={`modal-overlay theme-${currentTheme}`}
        contentLabel="modal"
      >
        <button
          className={`close-modal-button theme-${currentTheme}`}
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </Modal>
    </div>
  );
};

export default PopUp;
