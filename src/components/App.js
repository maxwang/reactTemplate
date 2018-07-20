import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Store from '../store/index';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>My Apps</h2>
                <Counter store={Store} />
            </div>
            
        );
    }
}

export default App;