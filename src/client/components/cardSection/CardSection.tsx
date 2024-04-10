import { configExample } from '../../config';

const CardSection = () => {
    const { paragraph } = configExample.typography;

    return (
        <div className="f-flex f-flex-row f-flex-wrap f-gap-6 f-margin-bottom-16">
            <div className="f-card-dark" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="f-card-dot-dark" style={{ width: '400px' }} >
                {paragraph}
            </div>
            <div className="f-card-shadow-m" style={{ width: '400px' }} >
                {paragraph}
            </div>
        </div>
    )
}

export default CardSection;