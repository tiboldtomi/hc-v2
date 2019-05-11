import * as React from 'react';
import './player-field.style.css';
import { TeamButtons } from '../team-buttons';

const PlayerField = ({ index }: IPlayerFieldProps) => {

    return (
        <div className={'player-field-container'}>
            <div className={'player-field-container__name-label'}>{index + 1}. játékos</div>
            <input type={'text'} placeholder={'Név'} />
            <TeamButtons />
        </div>
    );
};

interface IPlayerFieldProps {
    index: number;
}

export default PlayerField;
