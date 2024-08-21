import React from 'react';
import Navbar from './components/Navbar';
import Donut from './components/Donut';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Donut />
      {/* <BarChart/> */}
      {/* <HorizontalBarChart /> */}
      {/* Other components*/}
    </div>
  );
};

export default App;
