const Typography = () => {
    const thirdExample = 'Mauris consequat fermentum nisi, ac convallis diam egestas a. Nullam posuere rutrum cursus. Suspendisse fringilla quis est at semper. Nulla ut justo ultricies, fermentum ipsum ac, placerat mi. Mauris in viverra ipsum. Nulla et nibh varius, sagittis risus in, congue dolor. Quisque et consectetur diam, vestibulum feugiat augue.';

    return (
        <div>
            <h2 className="section-title">
                Typography
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}}/>
            <ul className="list-column" >
                <li>
                    <span className="text text-container">
                        {thirdExample}
                    </span>
                </li>
                <li>
                    <span className="label-text text-container">
                       {thirdExample}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Typography;