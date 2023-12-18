import { useEffect } from 'react';
import BModal from './components/BModal/BModal';
import './style.scss';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { toggle } = attributes;
  useEffect(() => {
    // clientId && setAttributes({ cId: clientId.substring(0, 10) });
    setAttributes({ cId: clientId });
  }, [clientId]); // Set & Update clientId to cId

  // useEffect(() => {
  //   const btnWrapper = document.querySelector('.edit-post-header-toolbar');
  //   const existingButton = btnWrapper.querySelector('.b-blocks-btn');
  //   if (!existingButton) {
  //     const button = document.createElement('button');
  //     button.setAttribute('class', 'b-blocks-btn');
  //     button.innerHTML = 'Click me';
  //     btnWrapper.appendChild(button);
  //     button.addEventListener('click', () => {
  //       setAttributes({ toggle: !toggle });
  //     });
  //   }
  // }, []);
  return (
    <div className={className} id={`hbHelloBlock-${clientId}`}>
      <BModal attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};
export default Edit;
