import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var originCreateElement = document.createElement;
document.createElement = function() {
    if (arguments[0] === 'span'){
        console.log('create span');
    }
   return originCreateElement.apply(document, arguments);
}
ReactDOM.render(<App />, document.getElementById('root'), function(){
    console.log('react dom render')
    console.log(this)
});
registerServiceWorker();
