import { useEffect } from 'react';

import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
  //console.log(this.props);

  useEffect(() => {}, []);

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monsters={monsters} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
