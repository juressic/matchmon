import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../contexts/app.context';

import './target.style.scss';

const Target = () => {
  const { category, setTargetId, gameDifficulty } = useContext(AppContext);
  const [randomTarget, setRandomTarget] = useState(0);

  const randomize = () => {
    const num = Math.floor(Math.random() * gameDifficulty + 1);
    setRandomTarget(num);
    setTargetId(randomTarget);
  };

  useEffect(() => {
    randomize();
  }, [randomTarget]);

  return (
    <div className="target">
      <div>
        <img
          className="target-icon"
          src={`https://robohash.org/${randomTarget}?set=set${category}&size=180x180`}
          alt="monster"
        />
      </div>
      {/*filteredMonsters && (
        <Card
          monster={filteredMonsters}
          category={categoty}
          mId={Math.floor(Math.random() * 10) + 1}
        />
      )*/}
    </div>
  );
};

export default Target;
