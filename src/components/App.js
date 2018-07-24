import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>My Apps</h2>
                <Counter />
            </div>
        );
    }
}

export default App;