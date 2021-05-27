const ModalWindow = function ({ isShow = false, children }) {
  return <div className='modal'>{isShow && children}</div>;
};
