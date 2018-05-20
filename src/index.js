import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo/Todo'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from './store/TodoReducer';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const store = createStore(TodoApp);

ReactDOM.render(<Provider store={store}>< Todo/></Provider>, document.getElementById('root'));
registerServiceWorker();
