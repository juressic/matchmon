import Target from '../target/target.component';
import { useState, useEffect, useContext } from 'react';
import './header.style.scss';
import CountDown from 'react-countdown';

import Category from '../category/category.component';

import { AppContext } from '../../contexts/app.context';

const Header = () => {
  const [counter, setCounter] = useState(60);
  const { gameCompleted, setGameFailed } = useContext(AppContext);

  useEffect(() => {
    counter > 0 &&
      gameCompleted === false &&
      setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) setGameFailed(true);
  }, [counter]);
  return (
    <div className="header-section">
      <div className="header-left-section">
        <Target />
        <span className="countdown">{counter}</span>
      </div>

      <Category />
    </div>
  );
};

export default Header;
