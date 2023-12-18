<?php
class HBHelloBlock
{

	public function __construct()
	{
		add_action('init', [$this, 'onInit']);
	}
	function onInit()
	{

		wp_register_style('hb-hello-style', HB_DIR_URL . 'dist/style.css', [], HB_VERSION); // Style
		wp_register_style('hb-hello-editor-style', HB_DIR_URL . 'dist/editor.css', ['hb-hello-style'], HB_VERSION); // Backend Style

		register_block_type(__DIR__, [
			'editor_style' => 'hb-hello-editor-style',
			'render_callback' => [$this, 'render']
		]); // Register Block

		wp_localize_script('hb-hello-editor-script', 'bsbInfo', [
			'patternsImagePath' => HB_DIR_URL . 'assets/images/patterns/',
		]);

		wp_set_script_translations('hb-hello-editor-script', 'textdomain', HB_DIR_PATH . 'languages');
	}

	function render($attributes)
	{
		extract($attributes);

		wp_enqueue_style('hb-hello-style');
		wp_enqueue_script('hb-hello-script', HB_DIR_URL . 'dist/script.js', ['react', 'react-dom'], HB_VERSION, true);
		wp_set_script_translations('hb-hello-script', 'textdomain', HB_DIR_PATH . 'languages');

		$className = $className ?? '';
		$blockClassName = "wp-block-hb-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr($blockClassName); ?>' id='hbHelloBlock-<?php echo esc_attr($cId) ?>'
			data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
	}
}
new HBHelloBlock();
