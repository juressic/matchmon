import './loose-screen.style.scss';
//import { useContext } from 'react';

//import { AppContext } from '../../contexts/app.context';

const LooseScreen = () => {
  // const { setGameCompleted } = useContext(AppContext);

  const restartHandler = () => {
    //setGameCompleted(false);
    window.location.reload(true);
  };

  return (
    <div className="loose-screen">
      <h1 className="loose-title">YOU LOOSE</h1>
      <button onClick={restartHandler} className="restart-btn">
        RESTART GAME
      </button>
    </div>
  );
};

export default LooseScreen;
