import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
  category: '',
  setCategory: () => {},
});

export const AppProvider = ({ children }) => {
  const [monsterSearch, setMonsterSearch] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [targetId, setTargetId] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameFailed, setGameFailed] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState(8);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        users.map(
          (user) => (user.mId = Math.floor(Math.random() * gameDifficulty) + 1)
        );
        setMonsters(users);
      });
  }, []);

  const [category, setCategory] = useState(1);

  const value = {
    category,
    setCategory,
    setMonsterSearch,
    monsterSearch,
    targetId,
    setTargetId,
    setMonsters,
    monsters,
    setGameCompleted,
    gameCompleted,
    gameDifficulty,
    setGameFailed,
    gameFailed,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
