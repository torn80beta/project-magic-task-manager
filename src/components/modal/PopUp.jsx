import React from 'react';
import Modal from 'react-modal';
import './popup.scss';
Modal.setAppElement('#root');

const PopUp = ({ children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const currentTheme = 'dark';

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
      <button onClick={openModal}>Open Modal</button>
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
