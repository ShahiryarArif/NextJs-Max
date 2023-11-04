const Modal = ({ onCloseModal }) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCloseModal}>
        Cancel
      </button>
      <button className="btn" onClick={onCloseModal}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
