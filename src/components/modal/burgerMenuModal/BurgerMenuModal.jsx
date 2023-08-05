import React from 'react';
import Modal from 'react-modal';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';

import './burgerMenuModal.scss';
Modal.setAppElement('#root');

const BurgerMenuModal = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { children, data } = props;
  // const currentTheme = useSelector(themeState);
  const currentTheme = useSelector(selectCurrentTheme);

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
        className={`open-menu-button theme-${currentTheme}`}
        onClick={openModal}
      >
        {data}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={`menu theme-${currentTheme}`}
        overlayClassName={`menu-overlay theme-${currentTheme}`}
        contentLabel="menu"
      >
        {children}
      </Modal>
    </div>
  );
};

export default BurgerMenuModal;
