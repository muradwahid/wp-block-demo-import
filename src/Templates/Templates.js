import { useState } from 'react';
import BModal from '../components/BModal/BModal';

const Templates = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="bBlocksTemplatesButton" onClick={() => setShow(true)}>
        <img src="https://ps.w.org/b-blocks/assets/icon-128x128.png"  alt='B Blocks'/>B
        Templates
      </button>
      <BModal show={show} setShow={setShow} />
    </>
  );
};
export default Templates;
