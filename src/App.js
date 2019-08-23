import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {
  
  const APP_ID = '71c6a3a4';
  const APP_KEY = "f25024ad40544d4b158795e332e0d595";

  const exampleReq = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free'

  useEffect(() =>{

  });

  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button " type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
