import React, { useState } from 'react';
import { createComponent } from '@lit/react';
// import { FToggle } from '../../../../index';
import { FToggle } from '../../../../packages/components/toggle/docs/toggle';

export const Toggle = createComponent({
    react: React,
    tagName: 'f-toggle',
    elementClass: FToggle,
    events: {
        onchange: 'change',        
    },
});

const FormSection = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="f-flex f-flex-row f-flex-wrap f-gap-6">
            <label className="f-toggle">
                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                <span className="f-toggle-slider f-toggle-success"></span>
            </label>
            <Toggle theme="success" checked={isChecked} change={handleToggle} />
        </div>
    );
};

export default FormSection;
