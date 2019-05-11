import * as React from 'react';
import './nav.style.css';

const Nav: React.FC = () => {

    return (
        <div className={"nav"}>
            <div className={"nav-content"}>
                <div className={"nav-title"}>{'mittomén'}</div>
                <div className={"nav-menu"}>
                    <div>Játékosok</div>
                    <div>Fordulók</div>
                    <div>Tabella</div>
                </div>
            </div>
        </div>
    );
};

export default Nav;