import React, { useState } from 'react';
import ListCourse from './ListCourse' ;
import AfficherMonHeader from './Header' ;
import AfficherMonFooter from './Footer' ;
import './App.css';

function App () {


  return (
<div className="App" >
<AfficherMonHeader /> <br/>
<ListCourse /><br/><br/><br/><br/>
<AfficherMonFooter />
</div>

  );
}


export default App ;
