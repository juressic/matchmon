import './card.styles.css';
import { useContext, useState, useEffect } from 'react';

import { AppContext } from '../../contexts/app.context';

const Card = ({ monster }) => {
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

  const updateMonsterId = (id, newMid) => {
    let newArray = [...monsters];

    const index = newArray.findIndex((object) => {
      return object.id === id;
    });
    newArray[index].mId = newMid;
    setMonsters(newArray);
    //console.log('new mId =' + newMid);
  };
  const randomize = (amount) => {
    let num = Math.floor(Math.random() * amount) + 1;
    if (num === monster.mId) num += 1;

    setMonsterId(num);

    if (num === targetId) {
      setMatch('match');
    } else {
      setMatch('card-container');
    }

    updateMonsterId(monster.id, num);
    winConditionCheck();
  };

  useEffect(() => {
    randomize(20);
  }, []);

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const winConditionCheck = () => {
    const checkWin = monsters.every((m) => targetId === m.mId || undefined);
    if (checkWin) {
      setGameCompleted(true);
    } else setGameCompleted(false);
  };

  const { name, id } = monster;
  return (
    <div className={match} key={id} onClick={() => randomize(gameDifficulty)}>
      <img
        className="card-img"
        onDragStart={preventDragHandler}
        src={`https://robohash.org/${monsterId}?set=set${category}&size=180x180`}
        alt={`monster ${name}`}
      />
      {/*<h3>{monsterId}</h3>*/}
    </div>
  );
};

export default Card;
