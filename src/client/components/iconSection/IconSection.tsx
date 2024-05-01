import React from 'react';
import { createComponent } from '@lit/react';
// import { FIcon } from '../../../ui/icons/docs/icons';
import { FIcon } from '../../../../index';

export const Icon = createComponent({
    tagName: 'f-icon',
    elementClass: FIcon,
    react: React,
});

const IconSection = () => {
    return (
        <div className='f-flex f-gap-10' >
            <Icon name='anchor' className='f-color-red' />
            <Icon name='facebook' />
            <Icon name='linkedin' />
        </div>
    )
}

export default IconSection;