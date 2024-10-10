// Menu.tsx
import { MenuItem } from "./type";
import { data } from "./data";
import Menucard from "./Menucard";

const Menu = () => {
  return (
    <div className="my-8">
      <h1 className="mb-5 text-5xl font-medium text-center font-playfair">Browse Our Menu</h1>
      <div className="flex flex-wrap justify-around gap-10 ">
        {data.map((item: MenuItem, index: number) => (
          <Menucard key={index} image={item.image} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

