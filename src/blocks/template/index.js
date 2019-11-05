/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Block Registration
 */
const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: __( 'Building Blocks (Template)', 'building-blocks' ),
	description: __( 'Add a card to show template.', 'building-blocks' ),
	icon: {
		src: icon,
		background: 'red',
		foreground: 'white'
	},
	category,
	styles: [
		{
			name: 'circle',
			label: _x( 'Circle', 'block style', 'building-blocks' ),
		},
		{
			name: 'square',
			label: _x( 'Square', 'block style', 'building-blocks' ),
			isDefault: true,
		},
	],
	example: {},
	attributes,
	edit,
	save,
} );
