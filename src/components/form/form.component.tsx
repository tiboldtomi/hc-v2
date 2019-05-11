import './form.style.css';
import * as React from 'react';
import { PlayerField } from '../player-field';
import Loader from '../loader/loader.component';

const Form = () => {

    const [loading, setLoading] = React.useState(true);
    const [playersCount, setPlayersCount] = React.useState(2);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    const RenderFields = () => {
        let fields: JSX.Element[] = [];
        for (let i = 0; i < playersCount; ++i) {
            fields = [
                ...fields,
                <PlayerField key={i} index={i} />
            ];
        };
        return (<>{fields}</>);
    };

    return (
        <div className={"form-container"}>
            {
                !loading
                    ? (
                        <div className={"form"}>
                            <div className={"form-content"}>
                                <h1>Adatok</h1>
                                <p>Adjátok meg neveteket és válasszatok csapatokat!</p>
                                {<RenderFields />}
                                <div className={"form-content__more-player"}>
                                    <i className={"fas fa-plus-circle"}></i>
                                    <p>Játékos hozzáadása</p>
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