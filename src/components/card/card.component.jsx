import './card.styles.css';
import { useContext, useState, useEffect } from 'react';

import { AppContext } from '../../contexts/app.context';

const Card = ({ monster, mId }) => {
  const {
    category,
    targetId,
    setMonsters,
    monsters,
    setGameCompleted,
    gameDifficulty,
  } = useContext(AppContext);

  const [monsterId, setMonsterId] = useState(0);
  const [match, setMatch] = useState('card-container');

  useEffect(() => {
    if (targetId === mId) {
      setMatch('match');
    } else {
      setMatch('card-container');
    }
  }, [mId, targetId]);

  const randomize = (difficulty) => {
    let num = Math.floor(Math.random() * difficulty) + 1;
    const newArr = [...monsters];
    if (num === mId) num += 1;
    const index = newArr.findIndex((object) => {
      return object.id === monster.id;
    });
    newArr[index].mId = num;
    console.log(newArr[index].mId);
    setMonsters(newArr);
    setMonsterId(num);
    if (num === targetId) {
      setMatch('match');
    } else {
      setMatch('card-container');
    }
    winConditionCheck();
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const winConditionCheck = () => {
    const checkWin = monsters.every((m) => targetId === m.mId);
    if (checkWin) {
      console.log('WIN');
      setGameCompleted(true);
    } else setGameCompleted(false);
  };

  const { name, id } = monster;
  return (
    <div className={match} key={id} onClick={(e) => randomize(gameDifficulty)}>
      <img
        className="card-img"
        onDragStart={preventDragHandler}
        src={`https://robohash.org/${mId}?set=set${category}&size=180x180`}
        alt={`monster ${name}`}
      />
    </div>
  );
};

export default Card;
