import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loguin from './componentes/Loguin';
import App from './App';
import * as serviceWorker from './serviceWorker';

const isSingedIn = false

const Index = () => {
	if (isSingedIn)
		return <App />
	else
		return <Loguin />
}

// pegando todo app criado e joga dentro da div root
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
