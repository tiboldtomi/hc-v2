import * as React from 'react';
import './team-buttons.style.css';

const TeamButtons = () => {
    const [buttonsCount, setButtonsCount] = React.useState(1);

    const onClickButton = () => {
        setButtonsCount(prevCount => (prevCount < 2 ? prevCount + 1 : prevCount));
    }

    const RenderButtons = () => {
        let buttons: JSX.Element[] = [];
        for (let i = 0; i < buttonsCount; ++i) {
            buttons = [
                ...buttons,
                <div key={i} onClick={onClickButton} className={'team-button-container__button'}>
                    <i className={'fas fa-plus'}></i>
                </div>
            ];
        };
        return (<>{buttons}</>);
    };

    return (
        <>
            <div className={'team-button-container__label'}>Csapatok</div>
            <div className={'team-button-container'}>
                {<RenderButtons />}
            </div>
        </>
    );
}

export default TeamButtons;
