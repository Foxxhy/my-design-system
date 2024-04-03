import React, { useState } from 'react';

const FormSection = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        console.log('is call');
        setIsChecked(!isChecked);
    };

    console.log('my toggle', isChecked);

    return (
        <div className="f-flex f-flex-row f-flex-wrap f-gap-6">
            <label className="f-toggle">
                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                <span className="f-toggle-slider f-toggle-success"></span>
            </label>
        </div>
    );
};

export default FormSection;
