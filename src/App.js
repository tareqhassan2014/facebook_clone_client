import React from 'react';
import Feed from './components/Feed/Feed';
import Header from './components/Shared/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <Header />
      <div className="app__body row justify-content-between">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-4">
          <Feed />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
