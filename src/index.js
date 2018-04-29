import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Todo from './Todo/Todo'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
