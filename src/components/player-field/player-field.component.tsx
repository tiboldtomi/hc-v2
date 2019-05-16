import * as React from 'react';
import './player-field.style.css';
import { TeamButtons } from '../team-buttons';
import { IPlayerFieldProps } from './player-field.props';

const PlayerField = ({ index, removable, onRemove }: IPlayerFieldProps) => {

    return (
        <div className={'player-field-container'}>
            <div className={'player-field-container__name-container'}>
                <div className={"player-field-container__name-label"}>{index + 1}. játékos</div>
                {removable && <i className={"far fa-trash-alt"} onClick={() => onRemove && onRemove(index)}></i>}
            </div>
            <input type={'text'} placeholder={'Név'} />
            <TeamButtons />
        </div>
    );
};

export default PlayerField;
