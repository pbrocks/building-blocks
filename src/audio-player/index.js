import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import {
	Button,
	Dashicon,
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

import {
	ColorPalette,
	ContrastChecker,
    InspectorControls,
    MediaPlaceholder,
    MediaUpload,
    MediaUploadCheck,
	PanelColorSettings,
    RichText,
} from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'audio' ];


registerBlockType( 'building-blocks/audio-player', {
	title: __( 'Gatherpress Audio Player', 'building-blocks' ),
	
	icon: {
		background: '#24C3AA',
		foreground: '#ffffff',
		src: 'carrot'
	},

	category: 'building-blocks',

	attributes: {
		url: {
			type: 'string',
			default: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3',
		},
		paragraphBG: {
			type: 'string',
			default: '#a04',
		},
		playerBG: {
			type: 'string',
			default: '#0a4',
		},
		fontColor: {
			type: 'string',
			default: '#fff',
		},
		style: {
			type: 'string',
			default: 'outline: 1px solid gray; padding: 5px;',
		},
        title: {
            type: 'string',
            selector: 'h2',
			default: 'Audio Player Title',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
			default: 'Description for Audio Player -- Audio Player from wpBlockshop Description',
        },
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		bkupURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
			default: 'https://i.picsum.photos/id/1006/400/400.jpg',
		},
    },
    example: {
        attributes: {
        	title: 'Hello Title',
            content: 'Hello World - This is a description',
        },
    },

	edit: function( props ) {

		const { attributes: { title, content, paragraphBG, playerBG, mediaURL, mediaID, fontColor }, setAttributes, className } = props;

		const onChangeTitle = ( newTitle ) => {
		    setAttributes( { title: newTitle } );
		};

		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};

		return (
			<>
			<InspectorControls>
				<PanelBody
					title="Audio Player Color"
					icon="welcome-widgets-menus"
					initialOpen={ false }
				>
				<PanelColorSettings
					title={ __( 'Description Background Color', 'building-blocks' ) }
					colorSettings={[
					{
						value: paragraphBG,
						onChange: paragraphBG => {
							setAttributes({ paragraphBG });
						},
						label: __( 'Current Description Background', 'building-blocks'  )
					}
					]}
				/>
				<PanelColorSettings
				  title={ __( 'Player Background Color', 'building-blocks' ) }
				  colorSettings={[
				    {
				      value: playerBG,
				      onChange: playerBG => {
				        setAttributes({ playerBG });
				      },
				      label: __( 'Current Player Background', 'building-blocks'  )
				    }
				  ]}
				/>
				<PanelColorSettings
				  title={ __( 'Font Color', 'building-blocks' ) }
				  colorSettings={[
				    {
				      value: fontColor,
				      onChange: fontColor => {
				        setAttributes({ fontColor });
				      },
				      label: __( 'Font Color', 'building-blocks'  )
				    }
				  ]}
				/>
			</PanelBody>
			<PanelBody
			    title="Audio Player Text"
			    icon="welcome-widgets-menus"
			    initialOpen={ true }
			>
				<PanelRow>
					<TextControl
						tagName="h2"
						placeholder={ __( 'Audio Title', 'building-blocks' ) }
						className={ 'audio-title' }
						onChange={ onChangeTitle }
						value={ title }
					/>
				</PanelRow>
				<PanelRow>
					<TextareaControl
						tagName="p"
						placeholder={ __( 'Audio Description', 'building-blocks' ) }
						className={ 'audio-description' }
						onChange={ onChangeContent }
						value={ content }
					/>
				</PanelRow>
				<PanelRow>
					Change your podcast audio here
				</PanelRow>
                <PanelRow>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={( media ) => {
							props.setAttributes( { url: media.url } )
						}}
						labels={ __( 'Upload an image or audio', 'building-blocks' )}
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						value={ props.attributes.url }
						render={ ( { open } ) => (
							<Button className={ 'audio-button' } onClick={ open } >
								Change Audio URL
							</Button>
						) }
					/>
				</MediaUploadCheck>
                </PanelRow>
			</PanelBody>
			</InspectorControls>
			<div className={ className } style={{ background: paragraphBG,  color: fontColor }}>
				<figure className="wp-block-building-blocks-building-blocks-cover-art">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes="image"
							value={ mediaID }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{ ! mediaID ?
										<Dashicon icon="format-image" /> :
										<img className="wp-block-building-blocks-building-blocks-cover-image" src={ mediaURL } alt={ __( 'Upload Avatar', 'building-blocks' ) } />
									}
								</Button>
							) }
						>
						</MediaUpload>
					</MediaUploadCheck>
				</figure>
			
				<RichText
					tagName="h2"
					placeholder={ __( 'Audio Title', 'building-blocks' ) }
					className={ 'audio-title' }
					onChange={ onChangeTitle }
					value={ title }
				/>
		
				<RichText
					tagName="p"
					placeholder={ __( 'Audio Description', 'building-blocks' ) }
					className={ 'audio-description' }
					onChange={ onChangeContent }
					value={ content }
				/>
				<div
					className={ 'building-blocks' }
					style={{ background: playerBG }}
				>
					{props.attributes.url}
				</div>
			</div>
		</>
		);
	},

	save: function( props ) {

		if( typeof props.attributes.mediaURL === 'undefined' ) {
			props.attributes.mediaURL = props.attributes.bkupURL;
		}
		return (
			<div className={ 'audio-grid' } style={{ background: props.attributes.paragraphBG, color: props.attributes.fontColor }}>
				<grid className="wp-block-building-blocks-building-blocks-cover-art">
					<img className="wp-block-building-blocks-building-blocks-cover-image" src={ props.attributes.mediaURL } alt={ __( 'Upload Avatar', 'building-blocks' ) } />
				</grid>
				<grid
					className={ 'wp-block-building-blocks-building-blocks-title' } 
				>
					<RichText.Content tagName="h2" value={ props.attributes.title } />
				</grid>
				<grid
					className={ 'wp-block-building-blocks-building-blocks-description' } 
				>			
		

					<RichText.Content tagName="p" value={ props.attributes.content } />
				</grid>
	<div className={ 'building-blocks-audio-holder' }>
		<div className={ 'audio building-blocks-building-blocks' } style={{background: props.attributes.playerBG}}>
			<div className={ 'play-pause-btn' }>  
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
					<path fill="#566574" fillRule="evenodd" d="M18 12L0 24V0" className={ 'play-pause-icon' } id="playPause"/>
				</svg>
			</div>
			<div className={ 'controls' }>
				<span className={ 'current-time' }></span>
				<div className={ 'slider' } dataDirection="horizontal">
					<div className={ 'progress' }>
						<div className={ 'pin' } id="progress-pin" dataMethod="rewind"></div>
					</div>
				</div>
				<span className={ 'total-time' }></span>
			</div>
			<div className={ 'volume' }>
				<div className={ 'volume-btn' }>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="#566574" fillRule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" id="speaker"/>
					</svg>
				</div>
				<div className={ 'volume-controls hidden' }>
					<div className={ 'slider' } dataDirection="vertical">
						<div className={ 'progress' }>
							<div className={ 'pin' } id="volume-pin" dataMethod="changeVolume"></div>
						</div>
					</div>
				</div>
			</div>
			<audio crossorigin>
				<source src={props.attributes.url} />
			</audio>
		</div>
	</div>
</div>
		);
	},
} );
