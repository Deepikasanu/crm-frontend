import React from 'react';
import './App.css';
import { Default } from './layout/Default';
// import { Dashboard } from './page/Dashboard/dashboard';
import { AddTicket } from './page/new-ticket/AddTicket';
// import { Entry } from './page/entry/Entry.page';


function App() {
  return (
    <div className="App">
      {/* <Entry/>   */}
     <Default>
     {/* <Dashboard/> */}
     <AddTicket/>
     </Default> 
    </div>
  );
}

export default App;

