import { parse } from '@wordpress/blocks';
import React from 'react';
import { CgExternal } from 'react-icons/cg';
import blockData from '../data.json';

const BlockLibrary = ({ searchTerm, toggleFirst, isPremium, setShow }) => {
  const filteredOptions = blockData.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="b-modal-block-pattern-list-container">
      {toggleFirst &&
        filteredOptions.map((option, i) => {
          const { pro, url = '' } = option;
          const hasAccess = isPremium || !pro;

          const linkProps = hasAccess
            ? {
                onClick: () => {
                  const blocks = parse(option.content);
                  wp.data.dispatch('core/block-editor').insertBlocks(blocks);
                  setShow(false);
                },
              }
            : {
                href: url,
                target: '_blank',
                rel: 'noreferrer',
              };

          return (
            <div className="b-modal-block-pattern-item" key={i}>
              <div className="single-block-paternItem">
                <img loading='lazy' src={option.img} alt="" />
                <div className="b-modal-block-hover-button">
                  <a {...linkProps}>
                    {hasAccess ? (
                      'Import'
                    ) : (
                      <>
                        Get Pro
                        <CgExternal className="b-modal-block-hover-button-icon" />
                      </>
                    )}
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span>{option.title}</span>
                {hasAccess ? (
                  ''
                ) : (
                  <span className="b-modal-block-badge">pro</span>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlockLibrary;
