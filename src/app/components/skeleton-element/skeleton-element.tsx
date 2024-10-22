import React from 'react'
import './skeleton-element.css';

function SkeletonElement(props: {
    width?: string;
    height?: string;
    quantity?: number;
    type: any;
}) {
    const classes = `skeleton ${props.type}`;
    const quantity = props.quantity == null || props.quantity == 0 ? 1 : props.quantity;
    const elements = []
    for (var i=0; i < quantity; i++) {
        elements.push(
            <div className={classes} key={i}
                style={{width: props.width, height: props.height}}>
            </div>
        );
    }

    return(<>{elements}</>);
}

export default SkeletonElement;
