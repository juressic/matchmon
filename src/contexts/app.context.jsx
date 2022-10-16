import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
  category: '',
  setCategory: () => {},
});

export const AppProvider = ({ children }) => {
  const [monsterSearch, setMonsterSearch] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [targetId, setTargetId] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameFailed, setGameFailed] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState(2);

  const addMonsterId = () => {
    let newArray = [...monsters];
    newArray.map((mon) => {
      mon.mId = Math.floor(Math.random() * gameDifficulty) + 1;
    });

    setMonsters(newArray);
  };

  useEffect(() => {
    addMonsterId();
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const onSearchChange = (e) =>
    setMonsterSearch(e.target.value.toLocaleLowerCase());

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name
        .toLocaleLowerCase()
        .includes(monsterSearch.toLocaleLowerCase())
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, monsterSearch]);

  const [category, setCategory] = useState(1);

  const value = {
    category,
    setCategory,
    setMonsterSearch,
    monsterSearch,
    onSearchChange,
    filteredMonsters,
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
