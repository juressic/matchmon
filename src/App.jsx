import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect, useContext } from 'react';
import Category from './components/category/category.component';
import WinScreen from './components/win-screen/win-screen.component';
import LooseScreen from './components/loose-screen/loose-screen.component';

import { AppContext } from './contexts/app.context';

import Header from './components/header/header.component';

const App = () => {
  const { filteredMonsters, onSearchChange, gameCompleted, gameFailed } =
    useContext(AppContext);
  return (
    <div className="App">
      <Header />
      {/*
        <SearchBox
        className="monster-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        />
      */}

      <h1 className="app-title">MatchMon</h1>
      <CardList monsters={filteredMonsters} />
      {gameCompleted && <WinScreen />}
      {gameFailed && <LooseScreen />}
    </div>
  );
};

export default App;
