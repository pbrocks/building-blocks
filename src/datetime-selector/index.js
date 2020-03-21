import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import {
    InspectorControls,
    RichText,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

import StartTime  from './start-datetime-picker';

registerBlockType( 'building-blocks/datetime-selector', {
    title: __( 'Datetime Selector', 'building-blocks' ),
    icon: 'calendar',
    category: 'building-blocks',

	attributes: {
		startDate: {
			type: 'string',
			default: '',
		},
        title: {
            type: 'string',
            selector: 'h2',
			default: 'Event Player Title',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
			default: 'Description for Event Player -- Event Player from wpBlockshop Description',
        },

    },
    example: {
        attributes: {
        	title: 'Hello Event',
            content: __( 'Hello World - This is a description', 'building-blocks' ),
        },
    },

	edit: function( props ) {

		const { attributes: { title, content, startDate }, setAttributes, className } = props;

		const onChangeTitle = ( newTitle ) => {
		    setAttributes( { title: newTitle } );
		};

		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		const onChangeDate = ( newDate ) => {
			setAttributes( { startDate: newDate } );
		};

		return (
			<>
			<InspectorControls>
			<PanelBody
			    title="Event Player Text"
			    icon="welcome-widgets-menus"
			    initialOpen={ true }
			>
				<PanelRow>
					<TextControl
						tagName="h2"
						placeholder={ __( 'Event Title', 'building-blocks' ) }
						className={ 'event-title' }
						onChange={ onChangeTitle }
						value={ title }
					/>
				</PanelRow>
				<PanelRow>
					<TextareaControl
						tagName="p"
						placeholder={ __( 'Event Description', 'building-blocks' ) }
						className={ 'event-description' }
						onChange={ onChangeContent }
						value={ content }
					/>
				</PanelRow>
			</PanelBody>
			</InspectorControls>
			<div className={ className } >

                <h3>{ startDate } e</h3>
            <RichText
                tagName="p"
                className={ className }
                onChange={ onChangeContent }
                value={ content }
            />
            <StartTime />
				<RichText
					tagName="h2"
					placeholder={ __( 'Event Title', 'building-blocks' ) }
					className={ 'event-title' }
					onChange={ onChangeTitle }
					value={ title }
				/>
		
				<RichText
					tagName="p"
					placeholder={ __( 'Event Description', 'building-blocks' ) }
					className={ 'event-description' }
					onChange={ onChangeContent }
					value={ content }
				/>
				<div
					className={ 'building-blocks' }
				>
					{props.attributes.url}
				</div>
			</div>
		</>
		);
	},


    save: ( props ) => {
        return <RichText.Content tagName="p" value={ props.attributes.content } />;
    },
} );