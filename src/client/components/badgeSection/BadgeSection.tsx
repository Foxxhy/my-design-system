import React from 'react';
import { configExample } from '../../config';

const BadgeSection = () => {
    const { short, medium, long } = configExample.badge;

    return (
        <div className="f-flex f-flex-row f-flex-wrap f-gap-6 f-margin-bottom-16">
            <span className="f-badge-success">{short}</span>
            <span className="f-badge-outline-warning">{medium}</span>
            <span className="f-badge-outline-danger">{long}</span>
        </div>
    )
}

export default BadgeSection;