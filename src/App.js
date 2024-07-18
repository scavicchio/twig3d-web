import logo from './logo.svg';
import './App.css';
import React from 'react';
import TreeViewComponent from './components/treeViewComponent';
import Viewport3D from './components/Viewport3D';

function App() {
  return React.createElement(
    'div', // parent container
    {style: { display: 'flex' }}, // apply flex display to outer container 
    <TreeViewComponent />, // render the TreeViewComponent
    React.createElement(
      'div',
      { className: 'App', style: { flex: 5 } },
      React.createElement(
        'header',
        { className: 'App-header' },
        React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
        React.createElement(
          'p',
          null,
          'Edit ',
          React.createElement('code', null, 'src/App.js'),
          ' and save to reload.'
        ),
        React.createElement(
          'a',
          { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' },
          'Learn React'
        )
      )
    )
  );
}


export default App;

