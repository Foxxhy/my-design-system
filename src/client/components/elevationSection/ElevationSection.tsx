import { configExample } from '../../config';
import './card.css';


const ElevationSection = () => {
    const { paragraph } = configExample.typography;

    return (
        <div className="f-flex f-flex-row f-flex-wrap f-gap-6 f-margin-bottom-16">
            <div className="f-card-shadow-s f-radius-12" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="f-card-shadow-m f-radius-12" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="f-card-shadow-l f-radius-12" style={{ width: '400px' }} >
                {paragraph}
            </div>
        </div>
    )
}

export default ElevationSection;