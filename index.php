<?php
/**
 * Plugin Name: Hello Block
 * Description: Description of the Hello Block.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: hello-block
 */

// ABS PATH
if (!defined('ABSPATH')) {
  exit;
}

// Constant
define('HB_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('HB_DIR_URL', plugin_dir_url(__FILE__));
define('HB_DIR_PATH', plugin_dir_path(__FILE__));

require_once HB_DIR_PATH . 'inc/block.php';

class BBlocksPlugin
{
  function __construct()
  {
    add_action('enqueue_block_editor_assets', array($this, 'enqueueBlockEditorAssets'));
  }

  function enqueueBlockEditorAssets()
  {
    wp_enqueue_script('b_blocks_templates_script', HB_DIR_URL . 'dist/templates.js', ['wp-blocks', 'wp-editor', 'wp-components'], '1.0.0', false);
  }
}
new BBlocksPlugin;