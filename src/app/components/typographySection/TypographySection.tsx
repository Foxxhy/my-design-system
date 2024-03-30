import { configExample } from "../../config";

const TypographySection = () => {
    const { paragraph } = configExample.typography;

    return (
        <ul className="list-column" >
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