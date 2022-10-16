import './win-screen.style.scss';
import { useContext } from 'react';

import { AppContext } from '../../contexts/app.context';

const WinScreen = () => {
  const { setGameCompleted } = useContext(AppContext);

  const restartHandler = () => {
    setGameCompleted(false);
    window.location.reload(true);
  };

  return (
    <div className="win-screen">
      <h1 className="win-title">YOU WIN</h1>
      <button onClick={restartHandler} className="restart-btn">
        RESTART GAME
      </button>
    </div>
  );
};

export default WinScreen;
