import './link.css';

const Card = () => {
    const text = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, ";

    return (
        <div>
            <h2 className="section-title" >
                Link
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}} />
            <div className="button-container">
                <a className='dark-link' href="https://google.fr" >Link</a>
                <a className='dark-underline-link' href="https://google.fr" >Link</a>
            </div>
        </div>
    )
}

export default Card;