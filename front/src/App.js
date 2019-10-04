import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Taulu from './components/Taulu';
import LomakeLisaa from './components/LomakeLisaa';
import LomakeMuokkaa from './components/LomakeMuokkaa';
import LomakePoista from './components/LomakePoista';
import Menu from './components/Menu';



class App extends Component {
  render() {
    return (
      
    <BrowserRouter>
     <br></br>
      <Menu />
      <br></br><br></br><br></br>
      <Switch>
        <Route path="/" component={Taulu} exact/>
        <Route path="/edit" component={LomakeMuokkaa}/>
        <Route path="/add" component={LomakeLisaa}/>
        <Route path="/delete" component={LomakePoista}/>
      </Switch>
    </BrowserRouter> 

    );
  }
}

export default App;