import React from 'react';
import Modal from 'react-modal';
import Icon from 'components/icon/Icon';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { useSelector } from 'react-redux';
import './popup.scss';

Modal.setAppElement('#root');

const PopUp = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { children, data } = props;
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
    <>
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
          <Icon id="x-close" width={18} height={18} />
        </button>
        {cloneChildren(children)}
      </Modal>
    </>
  );
};

export default PopUp;
