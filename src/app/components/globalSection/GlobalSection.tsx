import { addPrefixer } from '../../providers/addPrefixer';
// import './color.css';

// className={`${addPrefixer('main-title')}`}

const ColorItem = (props: any) => {
    const { text, color } = props;

    return (
        <div style={{ width: '230px' }} className={`${addPrefixer('display-flex')} ${addPrefixer('direction-row')} ${addPrefixer('gap-16')} ${addPrefixer('align-center')}`}>
            <span className={`${color}-background ${addPrefixer('width-40')} ${addPrefixer('height-40')} ${addPrefixer('radius-10')}`}></span>
            <span className='label-text'>{text}</span>
        </div>
    );
};

const GlobalSection = () => {
    return (
        <>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} >Breakpoints (enable as CSS Variable): </h3>
                <p className={`${addPrefixer('text')}`}> --breakpoint-xs to --breakpoint--xxl @ xs, s, m, l, xl, xxl </p>
            </div>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} >Displays (enable as CSS Variable): </h3>
                <p className={`${addPrefixer('text')}`}> .display-[xxxx] @ block, inline, inline-block, flex </p>
            </div>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} >Position: </h3>
                <p className={`${addPrefixer('text')}`}> .position-[xxxx] @ static, relative, absolute, fixed, sticky</p>
            </div>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} >Spaces: </h3>
                <p className={`${addPrefixer('text')}`}> --space-0 to --space-48 @ width, height, paddings, margins, position, radius, gap</p>
            </div>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} > Elevation (enable as CSS Variable): </h3>
                <p className={`${addPrefixer('text')}`}> --elevation-[xxx] @ default, cover, side, modal, dialog, toast </p>
            </div>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} >Shadow (enable as CSS Variable): </h3>
                <p className={`${addPrefixer('text')}`}> --box-shadow-s to --box-shadow-l @ s, m, l </p>
            </div>
            <div>
                <h3 className={`${addPrefixer('sub-section-title')}`} >Animation (enable as CSS Variable): </h3>
                <p className={`${addPrefixer('text')}`}> --animation-s to --animation-l @ s, m, l </p>
            </div>
        </>
    )
}

export default GlobalSection;