import { useState } from 'react';
import { Dishdata } from './Data';
import Dishecard from './Dishecard';
import { MenuItem } from './Type';

const Menu = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSelectedCategories([]);
  };

  const toggleCategory = (category: string) => {
    if (category === 'All') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prevCategories) => {
        if (prevCategories.includes(category)) {
          return prevCategories.filter((cat) => cat !== category);
        } else {
          return [...prevCategories, category];
        }
      });
    }
  };

  const filterDishes = () => {
    let filteredDishes = Dishdata;

    if (selectedCategories.length > 0) {
      filteredDishes = filteredDishes.filter((item) =>
        selectedCategories.some((category) => item.tags.includes(category))
      );
    }

    if (searchTerm) {
      filteredDishes = filteredDishes.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredDishes;
  };

  const getButtonClass = (buttonCategory: string) => {
    const baseClass = "px-4 py-2 rounded focus:outline-none transition-colors";
    if (buttonCategory === 'All' && selectedCategories.length === 0) {
      return `${baseClass} text-white border border-red-500 bg-red-500 hover:bg-red-100`;
    }
    if (selectedCategories.includes(buttonCategory)) {
      return `${baseClass} text-white bg-red-500 hover:bg-red-600`;
    }
    return `${baseClass} text-red-500 border border-red-500 bg-transparent hover:bg-red-100`;
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 my-10 text-center">
      <h1 className="mb-4 text-3xl font-semibold">Browse our menu</h1>
      <p className="mb-8 text-gray-600">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>

      <div className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for dishes..."
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5 mb-8">
        <button onClick={() => toggleCategory('All')} className={getButtonClass('All')}>All</button>
        <button onClick={() => toggleCategory('breakfast')} className={getButtonClass('breakfast')}>Breakfast</button>
        <button onClick={() => toggleCategory('main-dish')} className={getButtonClass('main-dish')}>Main dishes</button>
        <button onClick={() => toggleCategory('drink')} className={getButtonClass('drink')}>Drinks</button>
        <button onClick={() => toggleCategory('dessert')} className={getButtonClass('dessert')}>Desserts</button>
        <button onClick={() => setSelectedCategories([])} className="px-4 py-2 text-red-500 border border-red-500 rounded bg-transparent hover:bg-red-100 focus:outline-none">
          Clear Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterDishes().map((item: MenuItem) => (
          <div key={item.title} className="w-full p-4">
            <Dishecard {...item} showTag={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
