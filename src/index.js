import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'antd/dist/antd.css';
import './App.css';

const node = document.getElementById("react-app");

render(<App />, node);
