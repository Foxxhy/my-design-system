import { ReactNode } from "react";
import { addPrefixer } from "../../providers/addPrefixer";

interface ISection {
    title: string,
    children: ReactNode,
};

const Section = (props: ISection) => {
    const { title, children } = props;
    return (
        <div className={`${addPrefixer('info-dot-card')} ${addPrefixer('radius-12')}`} >
            <h2 className="section-title">
                {title}
            </h2>
            <div className={`${addPrefixer('margin-top-24')}`}>
                {children}
            </div>
        </div>
    )
}

export default Section;