import React from 'react';
import Feed from './components/Feed/Feed';
import Header from './components/Shared/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
