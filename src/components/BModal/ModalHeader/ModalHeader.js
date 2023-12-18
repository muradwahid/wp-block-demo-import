/* eslint-disable no-unused-vars */
import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
const ModalHeader = ({ show, setShow }) => {
  return (
    <header className="b-modal-header-container">
      <div className="b-modal-header-logo">
        <h3>BPlugins</h3>
      </div>
      <div onClick={() => setShow(false)} className="b-modal-header-right">
        <HiOutlineXMark />
      </div>
    </header>
  );
};

export default ModalHeader;
