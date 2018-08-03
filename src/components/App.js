import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from 'antd/lib/button';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
                <h2>My Apps</h2>
            </div>
            
        );
    }
}

export default App;