import './card.css';

const Card = () => {
    const text = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, ";

    return (
        <div>
            <h2 className="section-title">
                Cards
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}} />
            <div className="button-container">
                <div className="dark-card radius-card-8" style={{ width: '400px' }} >
                    {text}
                </div>
                <div className="dot-dark-card radius-card-8" style={{ width: '400px' }} >
                    {text}
                </div>
                <div className="shadow-card-m radius-card-8" style={{ width: '400px' }} >
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Card;