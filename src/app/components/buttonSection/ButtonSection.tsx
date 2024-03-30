import { configExample } from "../../config";

const ButtonSection = () => {
    const { button } = configExample;

    return (
        <div>
            <div className="button-container">
                <button className="success-button">{button.default}</button>
                <button className="disable-button">{button.default}</button>
                <button className="success-outline-button">{button.outline}</button>
            </div>
        </div>
    )
}

export default ButtonSection;