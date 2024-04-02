import { configExample } from "../../config";

const TypographySection = () => {
    const { paragraph } = configExample.typography;

    return (
        <ul className="f-flex f-flex-column f-gap-8 f-margin-top-24" >
            <li>
                <span className="text">
                    {paragraph}
                </span>
            </li>
            <li>
                <span className="label-text">
                    {paragraph}
                </span>
            </li>
        </ul>
    )
}

export default TypographySection;