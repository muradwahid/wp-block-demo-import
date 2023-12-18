import {
  __experimentalFullscreenModeClose as FullscreenModeClose,
  __experimentalMainDashboardButton as MainDashboardButton,
  PluginDocumentSettingPanel,
  PluginPostPublishPanel,
  PluginPostStatusInfo,
} from '@wordpress/edit-post';
import { useEffect } from '@wordpress/element';
import { close } from '@wordpress/icons';
import React from 'react';
const AdminButton = () => {
  const uniqueId = Math.floor(Math.random() * 999999);
  // useEffect(() => {
  //   const btnWrapper = document.querySelector('.edit-post-header-toolbar');
  //   const existingButton = btnWrapper.querySelector('.b-blocks-btn');
  //     const button = document.createElement('button');
  //     button.setAttribute('class', 'b-blocks-btn');
  //     button.innerHTML = 'Click me';
  //     btnWrapper.appendChild(button);

  // }, []);
  return (
    <div className="test">
      {/* <MainDashboardButton>
        <FullscreenModeClose icon={close} href="http://wordpress.org" />
      </MainDashboardButton> */}

      <PluginPostPublishPanel>
        <p>Post Publish Panel</p>
      </PluginPostPublishPanel>
      <PluginDocumentSettingPanel
        name="custom-panel"
        title="Custom Panel"
        className="custom-panel"
        icon="smiley"
      >
        Custom Panel Contents
      </PluginDocumentSettingPanel>
      <PluginPostStatusInfo>
        <p>Post Status Info SlotFill</p>
      </PluginPostStatusInfo>

      asdfasdfasdf
    </div>
  );
};

export default AdminButton;
