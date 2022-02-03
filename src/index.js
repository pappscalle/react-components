import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Components/Comments/Comments';

const App = () => {
    return <Comments />
};

ReactDOM.render(<App />, document.querySelector('#root'));