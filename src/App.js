import logo from './logo.svg';
import './App.css';
import React from 'react';
import TreeViewComponent from './components/treeViewComponent';
import Viewport3D from './components/Viewport3D';
import Upload from './components/UploadButton';
import Download from './components/DownloadButton'; 

function App() {
  return React.createElement(
      'div',
      {style: { height: '100vh', flex: 3 } },
      <Viewport3D/>,
      <Upload/>,
      <Download/>
    )
}


export default App;

