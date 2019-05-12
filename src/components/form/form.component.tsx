import './form.style.css';
import * as React from 'react';
import { Loader } from '../loader';
import { PlayerField } from '../player-field';
import { TeamsService } from '../../services';

const Form = () => {

    const [loading, setLoading] = React.useState(true);
    const [playerFields, setPlayerFields] = React.useState([<PlayerField key={0} index={0} />, <PlayerField key={1} index={1} />]);

    React.useEffect(() => {
        new TeamsService().getLeagues();
        setTimeout(() => setLoading(false), 1500);
    }, []);

    const addPlayer = () => {
        setPlayerFields(prevPlayerFields =>
            [
                ...prevPlayerFields,
                <PlayerField key={playerFields.length} index={playerFields.length} removable={true} onRemove={removePlayer} />
            ]
        );
    };

    const removePlayer = (index: number) => {
        let _playerFields = [...playerFields].filter(field => field.key !== index);
        setPlayerFields(_playerFields);
    }

    return (
        <div className={"form-container"}>
            {
                !loading
                    ? (
                        <div className={"form"}>
                            <div className={"form-content"}>
                                <div className={"form-content__header"}>
                                    <h1>Adatok</h1>
                                    <p>Adjátok meg neveteket és válasszatok csapatokat!</p>
                                </div>
                                <div className={"form-content__body"}>
                                    {playerFields}
                                    {playerFields.length < 3 &&
                                        <div className={"form-content__body__more-player"} onClick={addPlayer}>
                                            <i className={"fas fa-plus-circle"}></i>
                                            <p>Játékos hozzáadása</p>
                                        </div>
                                    }
                                </div>
                                <div className={"form-content__footer"}>
                                    <div className={"form-content__footer__button"}>Menjen</div>
                                </div>
                            </div>
                        </div>
                    )
                    : <Loader />
            }
        </div>
    );
};

export default Form;