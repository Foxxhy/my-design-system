import { ReactNode } from "react";

interface ISection {
    title: string,
    children: ReactNode,
};

const Section = (props: ISection) => {
    const { title, children } = props;
    return (
        <div className="f-card-dot-info f-radius-12" >
            <h2 className="f-title-section">
                {title}
            </h2>
            <div className="f-margin-top-24">
                {children}
            </div>
        </div>
    )
}

export default Section;