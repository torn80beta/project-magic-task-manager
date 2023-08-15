import React from 'react';
import Modal from 'react-modal';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import { useSelector } from 'react-redux';

import './burgerMenuModal.scss';
Modal.setAppElement('#root');

const BurgerMenuModal = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { children, data, ariaLabel } = props;
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
  function cloneChildren(child) {
    return React.cloneElement(child, {
      closeModal,
    });
  }
  return (
    <div>
      <button
        className={`open-menu-button theme-${currentTheme}`}
        onClick={openModal}
        aria-label={`${ariaLabel}`}
      >
        {data}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={`menu theme-${currentTheme}`}
        overlayElement={(props, contentElement) => (
          <div {...props}>
            <div className={`menu-wrapper ${modalIsOpen ? 'active' : ''}`}>
              {contentElement}
            </div>
          </div>
        )}
        overlayClassName={`menu-overlay theme-${currentTheme}`}
        contentLabel="menu"
      >
        {cloneChildren(children)}
      </Modal>
    </div>
  );
};

export default BurgerMenuModal;
