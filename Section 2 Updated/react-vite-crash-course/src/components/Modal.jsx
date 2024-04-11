import React from 'react'

const Modal = () => {
  return (
    <>
        <div className={classes.backdrop}>
            <dialog className={classes.modal}>
                {children}
            </dialog>
        </div>
    </>
  )
}

export default Modal