import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { pagesOptions, patternsOptions } from '../../../utils/options';


const SideBar = ({
  setSearchTerm,
  toggleFirst,
  setToggleFirst,
  toggleSecond,
  setToggleSecond,
}) => {
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <aside className="b-modal-sidebar-container">
      <div className="b-modal-sidebar-input-control-wrapper">
        <input
          type="text"
          className="b-modal-sidebar-input-control"
          placeholder="Search"
          onChange={handleSearch}
        />
        <HiMagnifyingGlass className="b-modal-sidebar-search-icon" />
      </div>
      <div className="b-modal-sidebar-sub-choices">
        <button
          onClick={() => {
            setToggleFirst(true);
            setToggleSecond(false);
          }}
          className={`button-style ${toggleFirst ? 'btn-active' : ''}`}
        >
          Patterns
        </button>
        <button
          onClick={() => {
            setToggleFirst(false);
            setToggleSecond(true);
          }}
          className={`button-style ${toggleSecond ? 'btn-active' : ''}`}
        >
          Pages
        </button>
      </div>
      <div className="b-modal-sidebar-bottom-container">
        {toggleFirst &&
          patternsOptions.map((option, i) => (
            <button
              onClick={() => setIndex(i)}
              className={`b-modal-sidebar-button ${
                index === i && 'btn-active'
              }`}
              key={i}
            >
              {option}
            </button>
          ))}
        {toggleSecond &&
          pagesOptions.map((option, i) => (
            <button
              onClick={() => setSecondIndex(i)}
              className={`b-modal-sidebar-button ${
                secondIndex === i && 'btn-active'
              }`}
              key={i}
            >
              {option}
            </button>
          ))}
      </div>
    </aside>
  );
};

export default SideBar;
