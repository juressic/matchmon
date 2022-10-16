import { useEffect } from 'react';

import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
  useEffect(() => {}, []);

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} mId={monster.mId} />;
      })}
    </div>
  );
};

export default CardList;
