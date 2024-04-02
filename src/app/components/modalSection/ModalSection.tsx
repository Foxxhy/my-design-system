import { useState } from 'react';

const ModalSection = () => {
    const [modal, setModal] = useState(false);
    const [dialog, setDialog] = useState(false)
    const [collapse, setCollapse] = useState(false)

    return (
        <div>
            <div className="f-flex f-flex-row f-flex-wrap f-gap-6 f-margin-bottom-16">
                <button className="f-button-info" onClick={() => setModal(true)} >Open modal</button>
                <button className="f-button-outline-info" onClick={() => setDialog(true)}>Open dialog</button>
            </div>
            <div className={modal ? 'f-modal-show' : 'f-modal-hide'} >
                Click on cta to close modal
                <button className="f-button-danger" onClick={() => setModal(false)} >fermer</button>
            </div>
            <div className={dialog ? 'f-dialog-show' : 'f-dialog-hide'} >
                Click on cta to close dialog
                <button className="f-button-danger" onClick={() => setDialog(false)} >fermer</button>
            </div>
            <div className="f-flex f-flex-row f-flex-wrap f-gap-6 f-margin-bottom-16">
                <div className='shadow-card-m'>
                    <button className="f-collapse-header" onClick={() => setCollapse(!collapse)}>Open dropdown</button>
                    <div className={collapse ? 'f-collapse-body-show' : 'f-collapse-body-hide'} >
                        Coucou
                    </div>
                </div>
            </div>
            <div className={(modal) ? 'f-cover-shadow' : ''} ></div>
            <div className={(dialog) ? 'f-cover-vague' : ''} ></div>

        </div>
    )
}

export default ModalSection;
