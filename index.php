<?php
/**
 * Plugin Name: The Building Blocks of Building Blocks
 * Plugin URI: https://github.com/richtabor/building-blocks
 * Description: Let’s dive in and learn how to build Gutenberg blocks for WordPress with Javascript. We’ll explore the foundations of the block development, how to setup a local block development environment and actually build a block or two using the latest techniques, block controls and settings panels.
 * Version: 1.0.0
 * Author: Rich Tabor
 *
 * @package building-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
function building_blocks_load_textdomain() {

	load_plugin_textdomain( 'building-blocks', false, basename( __DIR__ ) . '/languages' );

}
add_action( 'init', 'building_blocks_load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued.
 */
function building_blocks_register_block() {

	// Gutenberg is not active.
	if ( ! function_exists( 'register_block_type' ) ) {

		return;

	}

	// automatically load dependencies and version
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Block Javascript
	wp_register_script(
		'building-blocks',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// Editor Styling
	wp_register_style(
		'building-blocks-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// Frontend Styling
	wp_register_style(
		'building-blocks-frontend',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// Register block
	register_block_type(
		'building-blocks/author',
		array(
			'editor_script' => 'building-blocks',
			'style'         => 'building-blocks-frontend',
			'editor_style'  => 'building-blocks-editor',
		)
	);

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'building-blocks', 'building-blocks' );
	}

}
add_action( 'init', 'building_blocks_register_block' );

/**
 * Adding a block category creates a Panel
 */
function create_building_blocks_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'building-blocks',
				'title' => __( 'Building Blocks Panel', 'building-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'create_building_blocks_panel', 10, 2 );

add_filter( 'render_block', 'building_blocks_show_block_type', 10, 2 );
function building_blocks_show_block_type( $block_content, $block ) {
	// if ( true === WP_DEBUG ) {
		$block_content = "<div class='wp-block' data-blockType='{$block['blockName']}'>{$block_content}</div><h5 style=\"color:salmon\">{$block['blockName']}</h5>";
	// }
	return $block_content;
}
add_filter( 'render_block', 'show_the_block_constituents', 10, 2 );
function show_the_block_constituents( $block_content, $block ) {
	// if ( true === WP_DEBUG && current_user_can( 'administrator' ) ) {
		$block_content = "<br /><div class='wp-block' data-blockType='{$block['blockName']}' style='clear:both;'>{$block_content}</div>" . ( 'string' === gettype( $block['blockName'] ) ? '<pre><xmp> $block_content = ' . gettype( $block_content ) . " {$block['blockName']} " . print_r( $block, true ) . '</xmp></pre>' : '' );
	// }
	return $block_content;
}
