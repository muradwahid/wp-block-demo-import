import { subscribe } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import { createRoot } from 'react-dom/client';
import Templates from './Templates/Templates';

const mountDesignLibrary = () => {
  // Render our button.
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('bBlocksTemplatesWrapper');
  createRoot(buttonDiv).render(<Templates />);

  // Just keep on checking because there are times when the toolbar gets
  // unmounted.
  subscribe(() => {
    setTimeout(() => {
      const toolbar = document.querySelector('.edit-post-header-toolbar');
      if (toolbar) {
        if (!toolbar.querySelector('.bBlocksTemplatesWrapper')) {
          toolbar.appendChild(buttonDiv);
        }
      }
    }, 1);
  });
};
domReady(mountDesignLibrary);
