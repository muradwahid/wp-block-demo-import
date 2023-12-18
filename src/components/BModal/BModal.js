import React, { useEffect, useRef, useState } from 'react';
import BlockLibrary from './BlockLibrary/BlockLibrary';
import ModalHeader from './ModalHeader/ModalHeader';
import SideBar from './SideBar/SideBar';
import './modalStyle.scss';
const BModal = ({ show, setShow }) => {
  const [toggleFirst, setToggleFirst] = useState(true);
  const [toggleSecond, setToggleSecond] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const isPremium = true;
  const contentRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!contentRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div
      className="b-modal-main-container"
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      <div ref={contentRef} className="b-modal-container">
        <ModalHeader show={show} setShow={setShow} />
        {show && <div className="b-modal-body">
          <SideBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setToggleFirst={setToggleFirst}
            setToggleSecond={setToggleSecond}
            toggleFirst={toggleFirst}
            toggleSecond={toggleSecond}
          />
          <BlockLibrary
            setShow={setShow}
            isPremium={isPremium}
            searchTerm={searchTerm}
            toggleFirst={toggleFirst}
            toggleSecond={toggleSecond}
          />
        </div>}
      </div>
    </div>
  );
};

export default BModal;
