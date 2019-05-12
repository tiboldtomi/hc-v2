import './modal.style.css';
import * as React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose }: any) => {

    return (
        <div className={'modal'}>
            <div className="modal-close-button">
                <i className="fas fa-times-circle" onClick={() => onClose()}></i>
            </div>
            <div className="modal__header">
                <h1>Csapatok</h1>
                <p>Válassz csapatot!</p>
            </div>
            <div className="modal__body"></div>
            <div className="modal__footer">
                <div className="modal__footer__button primary">Mentés</div>
                <div className="modal__footer__button secondary" onClick={() => onClose()}>Mégse</div>
            </div>
        </div>
    );
}

const ModalContainer = ({ isOpen, onClose }: any) => {

    React.useEffect(() => {
        const root = document.querySelector('#root');
        if (isOpen) {
            const modal = document.createElement('div');
            modal.className = 'modal-container';
            root && root.appendChild(modal);
            ReactDOM.render(<Modal onClose={onClose} />, modal);
        }
        else {
            const modal = document.querySelector('.modal-container');
            modal && root && root.removeChild(modal as Node);
        }
    }, [isOpen]);


    return (
        <></>
    );
};

export default ModalContainer;