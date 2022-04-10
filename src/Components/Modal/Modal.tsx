import { useState } from 'react';

const useModal = () => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    textAlign: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #fbff0c',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    toggleModal,
    closeModal,
    openModal,
    style,
  };
};

export default useModal;
