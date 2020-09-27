import React from 'react';
import './App.css';

import ProfilPhoto from './profile/ProfilPhoto';
import Address from './profile/Address';
import FullName from './profile/FullName';

function App() {
  return (
    <div className="App">
    <FullName/>
     <ProfilPhoto/>
     <Address/>
    </div>
  );
}

export default App;
