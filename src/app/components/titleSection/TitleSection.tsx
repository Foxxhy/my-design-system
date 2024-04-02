import { configExample } from "../../config";

const TitleSection = () => {
    const { medium } = configExample.title;

    return (
        <ul className="f-flex f-flex-column f-gap-8 f-margin-top-24" >
            <li>
                <span className="f-title-main">
                    {medium}
                </span>
            </li>
            <li>
                <span className="f-title-section">
                    {medium}
                </span>
            </li>
            <li>
                <span className="f-title-sub">
                    {medium}
                </span>
            </li>
            <li>
                <span className="f-subtitle-main">
                    {medium}
                </span>
            </li>
            <li>
                <span className="f-subtitle-section">
                    {medium}
                </span>
            </li>
            <li>
                <span className="f-subtitle-sub">
                    {medium}
                </span>
            </li>
        </ul>
    )
}

export default TitleSection;