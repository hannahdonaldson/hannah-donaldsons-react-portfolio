import React, { Component } from 'react';

import Clicker from './clicker';

export default class App extends Component {
 render() {
   return (
     <div className='app'>
       <h1>State and Props</h1>
       <Clicker handSomethingDown='Something' />
     </div>
   );
 }
}