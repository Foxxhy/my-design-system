import './button.css';

const Button = () => {
    return (
        <div>
            <h2 className="section-title">
                Button
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}}/>
            <div className="button-container">
                <button className="success-button">Success button</button>
                <button className="info-button">Info button</button>
                <button className="warning-button">Warning button</button>
                <button className="danger-button">Danger button</button>
                <button className="light-button">Light button</button>
                <button className="dark-button">Dark button</button>
            </div>
            <div className="button-container">
                <button className="success-outline-button">Success button</button>
                <button className="info-outline-button">Info button</button>
                <button className="warning-outline-button">Warning button</button>
                <button className="danger-outline-button">Danger button</button>
                <button className="light-outline-button">Light button</button>
                <button className="dark-outline-button">Dark button</button>
            </div>
            {/* <h2 className="sub-section-title">
                Default Button Hovered and Focused
            </h2>
            <div className="button-container">
                <button className="button-success-animated">Success button</button>
                <button className="button-info-animated">Info button</button>
                <button className="button-warning-animated">Warning button</button>
                <button className="button-danger-animated">Danger button</button>
                <button className="button-light-animated">Light button</button>
                <button className="button-dark-animated">Dark button</button>
            </div>
            <h2 className="sub-section-title">
                Outline Button Hovered and Focused
            </h2>
            <div className="button-container">
                <button className="outline-button-success-animated">Success button</button>
                <button className="outline-button-info-animated">Info button</button>
                <button className="outline-button-warning-animated">Warning button</button>
                <button className="outline-button-danger-animated">Danger button</button>
                <button className="outline-button-light-animated">Light button</button>
                <button className="outline-button-dark-animated">Dark button</button>
            </div> */}
        </div>
    )
}

export default Button;