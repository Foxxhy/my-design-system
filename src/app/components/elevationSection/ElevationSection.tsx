import { configExample } from '../../config';
import './card.css';


const ElevationSection = () => {
    const { paragraph } = configExample.typography;

    return (
        <div className="button-container">
            <div className="dark-card shadow-s radius-12" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="dark-card shadow-m radius-12" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="dark-card shadow-l radius-12" style={{ width: '400px' }} >
                {paragraph}
            </div>
        </div>
    )
}

export default ElevationSection;