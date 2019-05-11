import './App.css';
import React from 'react';
import { Nav } from './components/nav';
import { Form } from './components/form';

const App: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className={"main-container"}>
                <Form />
            </div>
        </div>
    );
};

export default App;
