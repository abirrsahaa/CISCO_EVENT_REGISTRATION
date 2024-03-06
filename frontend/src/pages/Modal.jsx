import React from "react";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="h-[100vh] w-[100vw] fixed flex justify-center items-center bg-gray-500">
      <div className="w-[600px] h-[600px] rounded-xl bg-white shadow-2xl flex flex-col p-5">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
// import React from "react";

// const Modal = () => {
//   return <div>Modal</div>;
// };

// export default Modal;
