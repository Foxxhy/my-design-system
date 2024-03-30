import { configExample } from '../../config';
import './card.css';

const CardSection = () => {
    const { paragraph } = configExample.typography;

    return (
        <div className="button-container">
            <div className="dark-card" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="dark-dot-card" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="shadow-card-m" style={{ width: '400px' }} >
                {paragraph}
            </div>
        </div>
    )
}

export default CardSection;