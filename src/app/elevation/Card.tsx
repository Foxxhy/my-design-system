import './card.css';

const Elevation = () => {
    const text = "Le Lorem Ipsum est simplement du faux texte employé dans la composition.";

    return (
        <div>
            <h2 className="section-title">
                Elevation
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}} />
            <div className="button-container">
                <div className="dark-card shadow-s" style={{ width: '400px' }} >
                    {text}
                </div>
                <div className="dark-card shadow-m" style={{ width: '400px' }} >
                    {text}
                </div>
                <div className="dark-card shadow-l" style={{ width: '400px' }} >
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Elevation;