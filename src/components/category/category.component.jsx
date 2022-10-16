import './category.style.scss';

import { useContext } from 'react';

import { AppContext } from '../../contexts/app.context';

const Category = () => {
  const { setCategory } = useContext(AppContext);

  const setCategoryHandler = (e) => {
    switch (e.target.value) {
      case 'monsters':
        setCategory(2);
        console.log('monsters');
        break;
      case 'robots':
        setCategory(1);
        break;
      case 'cats':
        setCategory(4);
        break;
      case 'droids':
        setCategory(3);
        break;
      default:
        return 4;
    }
  };

  return (
    <div>
      <select className="select" onChange={setCategoryHandler} name="category">
        <option value="robots">Robots</option>
        <option value="cats">Cats</option>
        <option value="monsters">Monsters</option>
        <option value="droids">Droids</option>
      </select>
    </div>
  );
};

export default Category;
