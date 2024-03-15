const Title = () => {
    const example = 'Lorem ipsum dolor sit amet';
    const secondExample = 'Vivamus sit amet pharetra felis.';

    return (
        <div>
            <h2 className="section-title">
                Title
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}}/>
            <ul className="list-column" >
                <li>
                    <span className="main-title">
                        {example}
                    </span>
                </li>
                <li>
                    <span className="section-title">
                        {example}
                    </span>
                </li>
                <li>
                    <span className="sub-section-title">
                        {example}
                    </span>
                </li>
                <li>
                    <span className="main-subtitle">
                    {secondExample}
                    </span>
                </li>
                <li>
                    <span className="section-subtitle">
                    {secondExample}
                    </span>
                </li>
                <li>
                    <span className="sub-section-subtitle">
                    {secondExample}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Title;