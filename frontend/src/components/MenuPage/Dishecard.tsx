import { MenuItem } from './Type';

interface DishecardProps extends MenuItem {
  showTag: boolean;
}

const Dishecard = ({ image, title, description, price, tags, showTag }: DishecardProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-xs overflow-hidden transition-all duration-100 bg-white rounded shadow-lg cursor-pointer hover:ease-in-out hover:shadow-2xl">
      <div className="flex items-center justify-center w-full h-40">
        <img className="object-contain max-h-full rounded-lg" src={image} alt={title + ' image'} />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
        <p className="mt-2 font-bold text-gray-900">${price.toFixed(2)}</p>
        {showTag && <p className="text-sm text-gray-700">{tags}</p>}
      </div>
    </div>
  );
}

export default Dishecard;
