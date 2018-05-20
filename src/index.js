import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo/Todo'
import { Provider } from 'react-redux';
import TodoApp from './store/TodoReducer';
import {store} from './store/index'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(<Provider store={store}>< Todo/></Provider>, document.getElementById('root'));
registerServiceWorker();
