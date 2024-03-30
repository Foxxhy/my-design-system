import { configExample } from "../../config";

const TitleSection = () => {
    const { short, medium } = configExample.title;

    return (
        <ul className="list-column" >
            <li>
                <span className="main-title">
                    {short}
                </span>
            </li>
            <li>
                <span className="section-title">
                    {short}
                </span>
            </li>
            <li>
                <span className="sub-section-title">
                    {short}
                </span>
            </li>
            <li>
                <span className="main-subtitle">
                    {medium}
                </span>
            </li>
            <li>
                <span className="section-subtitle">
                    {medium}
                </span>
            </li>
            <li>
                <span className="sub-section-subtitle">
                    {medium}
                </span>
            </li>
        </ul>
    )
}

export default TitleSection;