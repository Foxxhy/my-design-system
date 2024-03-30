import { useState } from 'react';

const ModalSection = () => {
    const [modal, setModal] = useState(false);
    const [dialog, setDialog] = useState(false)
    const [collapse, setCollapse] = useState(false)

    return (
        <div>
            <div className="button-container">
                <button className="info-button" onClick={() => setModal(true)} >Open modal</button>
                <button className="dark-outline-button" onClick={() => setDialog(true)}>Open dialog</button>
            </div>
            <div className="button-container">
                <div className='shadow-card-m'>
                    <button className="header-collapse" onClick={() => setCollapse(!collapse)}>Open dropdown</button>
                    <div className={collapse ? 'show-body-collapse' : 'hidden-body-collapse'} >
                        Coucou
                    </div>
                </div>
            </div>
            <div className={modal ? 'show-modal' : 'hide-modal'} >
                Click on cta to close
                <button className="info-button" onClick={() => setModal(false)} >fermer</button>
            </div>
            <div className={dialog ? 'show-dialog' : 'hide-dialog'} >
                Click on cta to close
                <button className="info-button" onClick={() => setDialog(false)} >fermer</button>

            </div>
            <div className={(modal || dialog) ? 'cover' : ''} ></div>
        </div>
    )
}

export default ModalSection;
