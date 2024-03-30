import { configExample } from '../../config';
import './button.css';

const BadgeSection = () => {
    const { short, medium, long } = configExample.badge;

    return (
        <div className="button-container">
            <span className="success-badge">{short}</span>
            <span className="warning-badge">{medium}</span>
            <span className="danger-badge">{long}</span>
        </div>
    )
}

export default BadgeSection;