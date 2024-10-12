import { Link } from "react-router-dom";
import { MenuItem } from "./type";

const Menucard = (props: MenuItem) => {
    return (
      <div className="flex flex-col gap-2 p-4 text-center transition duration-[180ms] bg-white rounded-lg shadow-lg hover:ease-in w-60 hover:shadow-xl   hover:scale-[102%] ">
        <img src={props.image} alt={props.title + ' image'} className="flex items-center mb-2 rounded-md " />
        <p className="mb-1 text-lg font-semibold">{props.title}</p>
        <p className="mb-2 text-sm text-gray-600">{props.description}</p>
        <Link to={"/menu"} className="text-[#AD343E] text-sm font-semibold hover:underline">Explore Menu</Link>
      </div>
    )
  }

  
  export default Menucard;
  