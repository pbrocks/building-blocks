( function() {
    var el = wp.element.createElement;
    var SVG = wp.primitives.SVG;
    var circle = el( 'circle', { cx: 10, cy: 10, r: 10, fill: 'red', stroke: 'blue', strokeWidth: '10' } );
    var svgIcon = el( SVG, { width: 20, height: 20, viewBox: '0 0 20 20'}, circle);
    wp.blocks.updateCategory( 'my-category', { icon: svgIcon } );
} )();


	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="m12 3l0.01 10.55c-0.59-0.34-1.27-0.55-2-0.55-2.22 0-4.01 1.79-4.01 4s1.79 4 4.01 4 3.99-1.79 3.99-4v-10h4v-4h-6zm-1.99 16c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" /></SVG>,
