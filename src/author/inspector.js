import { __ } from '@wordpress/i18n';

import { registerPlugin } from '@wordpress/plugins';

import {
	createHigherOrderComponent,
} from '@wordpress/compose';

import {
	addFilter,
} from '@wordpress/hooks';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    Slot,
    Fill,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

// Add a custom control which contains a Slot
export const exampleAdditionalControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        return (
            <>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody title={ __( 'Example Panel', 'building-blocks' ) } >
                        <PanelRow>
                            <Slot name="example-slot" fillProps={ props } />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </>
        );

    };
}, 'exampleAdditionalControl' );

addFilter( 'editor.BlockEdit', 'building-blocks/author', exampleAdditionalControl );

// Add a Fill which passes through through the props from fillProps in the Slot
// The "name" of the Fill must match  the  name of the Slot
function ExampleFill() {
    return (
        <Fill name="example-slot">
            {
                ( fillProps ) => {
                    return (
                        <SomeComponent props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

registerPlugin( 'add-sidebar-panel', { render: ExampleFill } );

// This is the output component which has the props passed from the Slot
// Which will be details of the selected block in this case.
function SomeComponent( fillProps ) {
    console.log( fillProps );
    return (
        <div>This outputs in the PanelRow which contains the Slot</div>
    );
}