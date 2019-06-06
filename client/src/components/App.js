import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import Streamcreate from './streams/Streamcreate';
import Streamlist from './streams/Streamlist';
import Streamedit from './streams/Streamedit';
import Streamdelete from './streams/Streamdelete';
import Streamshow from './streams/Streamshow';
import Header from './common/Header';
import history from '../history'
function App() {
  return (
    <div className="">
    
         <Router history={history}>
         <Header/>
         <div className="ui container">
           <Switch>
           <Route exact path='/' component={Streamlist} />
           <Route exact path='/streams/new' component={Streamcreate}/>
           <Route exact path='/streams/edit/:id' component={Streamedit}/>
           <Route exact path='/streams/delete/:id' component={Streamdelete}/>
           <Route exact path='/streams/:id' component={Streamshow}/>
           </Switch>
           </div>
         </Router>
        
    </div>
  );
}

export default App;
