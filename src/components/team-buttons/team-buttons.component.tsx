import * as React from 'react';
import './team-buttons.style.css';
import { Modal } from '../modal';

const TeamButton = ({ index }: any) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    return (
        <>
            <div key={index} className={'team-button-container__button'} onClick={() => setModalIsOpen(prevState => !prevState)}>
                <i className={'fas fa-plus'}></i>
            </div>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(prevState => !prevState)} />
        </>
    );
}

const TeamButtons = () => {
    const [teams, setTeams] = React.useState([<TeamButton key={0} index={0} />]);

    return (
        <>
            <div className={'team-button-container__label'}>Csapatok</div>
            <div className={'team-button-container'}>
                {teams}
            </div>
        </>
    );
}

export default TeamButtons;
