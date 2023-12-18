import { registerBlockType } from '@wordpress/blocks';

import { registerPlugin } from '@wordpress/plugins';

import metadata from '../inc/block.json';
import Edit from './Edit';
import './editor.scss';
import { blockIcon } from './utils/icons';
import AdminButton from './components/AdminButton/AdminButton';

registerBlockType(metadata, {
  icon: blockIcon,

  // Build in Functions
  edit: Edit,

  save: () => null,
});


registerPlugin('hb-templates', {
  render: AdminButton,
});
