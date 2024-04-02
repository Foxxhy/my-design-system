const GlobalSection = () => {
    return (
        <>
            <div>
                <h3 className="f-title-sub">Breakpoints (enable as CSS Variable): </h3>
                <p className='f-text'> --breakpoint-xs to --breakpoint--xxl @ xs, s, m, l, xl, xxl </p>
            </div>
            <div>
                <h3 className="f-title-sub" >Displays (enable as CSS Variable): </h3>
                <p className='f-text'> .display-[xxxx] @ block, inline, inline-block, flex </p>
            </div>
            <div>
                <h3 className="f-title-sub" >Position: </h3>
                <p className='f-text'> .position-[xxxx] @ static, relative, absolute, fixed, sticky</p>
            </div>
            <div>
                <h3 className="f-title-sub" >Spaces: </h3>
                <p className='f-text'> --space-0 to --space-48 @ width, height, paddings, margins, position, radius, gap</p>
            </div>
            <div>
                <h3 className="f-title-sub" > Elevation (enable as CSS Variable): </h3>
                <p className='f-text'> --elevation-[xxx] @ default, cover, side, modal, dialog, toast </p>
            </div>
            <div>
                <h3 className="f-title-sub" >Shadow (enable as CSS Variable): </h3>
                <p className='f-text'> --box-shadow-s to --box-shadow-l @ s, m, l </p>
            </div>
            <div>
                <h3 className="f-title-sub" >Animation (enable as CSS Variable): </h3>
                <p className='f-text'> --animation-s to --animation-l @ s, m, l </p>
            </div>
        </>
    )
}

export default GlobalSection;