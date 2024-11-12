import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import RandomDestination from './components/RandomDestination';
import Search from './components/Search';
import DestinationDetails from './components/DestinationDetails';


function App() {
  const [view, setView] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState(null)

  const showRandomDestinetion = () =>{
    setView('random');
  };

  const showSearch = () =>{
    setView('search')
  }
const handleSearch = (interst) => {

  const destination = {
    name: 'Hawaii',
      description: 'Beautiful beaches and tropical weather.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.btOaRdAUek8J3KJ00oTNuAHaEK&pid=Api&P=0&h=180',
  };
  setSelectedDestination(destination);
  setView('details');
}
  return (
    <div>
      {view == 'home' && <Home onRandomClick={showRandomDestinetion} onSearchClick={showSearch} />}
      {view == 'random' && <RandomDestination />}
      {view == 'search' && <Search />}
      {view == 'details' && <DestinationDetails destination={selectedDestination} />}
    </div>
  );
}

export default App
