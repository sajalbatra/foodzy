import { useState } from 'react';
import { Dishdata } from './Data';
import Dishecard from './Dishecard';
import { MenuItem } from './Type';

const Menu = () => {
  const [category, setCategory] = useState('All');

  const filterDishes = (category: string) => {
    if (category === 'All') {
      return Dishdata;
    } else {
      return Dishdata.filter(item => item.tag === category);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 my-10 text-center ">
      <h1 className="mb-4 text-3xl font-semibold">Browse our menu</h1>
      <p className="mb-8 text-gray-600">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        <button onClick={() => setCategory('All')} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none">All</button>
        <button onClick={() => setCategory('breakfast')} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none">Breakfast</button>
        <button onClick={() => setCategory('main-dish')} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none">Main dishes</button>
        <button onClick={() => setCategory('drink')} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none">Drinks</button>
        <button onClick={() => setCategory('dessert')} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none">Desserts</button>
      </div>
      <div className="flex flex-wrap justify-around">
        {filterDishes(category).map((item: MenuItem) => (
          <div key={item.title} className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Dishecard {...item} showTag={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
