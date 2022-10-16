import './App.css';
import CardList from './components/card-list/card-list.component';
import { useContext } from 'react';
import WinScreen from './components/win-screen/win-screen.component';
import LooseScreen from './components/loose-screen/loose-screen.component';

import { AppContext } from './contexts/app.context';

import Header from './components/header/header.component';

const App = () => {
  const { monsters, gameCompleted, gameFailed } = useContext(AppContext);

  return (
    <div className="App">
      <Header />
      <h1 className="app-title">MatchMon</h1>
      <CardList monsters={monsters} />
      {gameCompleted && <WinScreen />}
      {gameFailed && <LooseScreen />}
    </div>
  );
};

export default App;
