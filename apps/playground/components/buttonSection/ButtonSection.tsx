import React from "react";
import { configExample } from "../../config";

const ButtonSection = () => {
    const { button } = configExample;

    return (
        <div>
            <div className="f-flex f-flex-row f-flex-wrap f-gap-6 f-margin-bottom-16">
                <button className="f-button-success f-effect-hover">{button.default}</button>
                <button className="f-button-outline-success f-effect-focus">{button.outline}</button>
                <button className="f-button-disable">{button.outline}</button>
            </div>
        </div>
    )
}

export default ButtonSection;