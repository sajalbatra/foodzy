import { Link } from "react-router-dom";
import { MenuItem } from "./type";

const Menucard = (props: MenuItem) => {
    return (
      <div className="w-72 h-96 bg-white rounded-md rounded-b-2xl shadow-xl hover:shadow-2xl  hover:ease-in relative"> 
      <div className=" w-full h-56 rounded-t-md bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
        <img src={props.image} alt={props.title + ' image'} className="w-40 h-40 object-cover rounded-t-md " />
      </div>
      <div className="bg-white h-44 w-72 absolute bottom-0 rounded-2xl px-5 py-3">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold tracking-wide">{props.title}</h1>
          <Link to={"/menu"}>
          <div className="h-fit w-24  border rounded-md relative overflow-hidden">
            <div className="hover:-translate-y-full transition-all duration-300">
              <button className="w-full flex  justify-between gap-1  px-3 py-1  transition-all duration-300">Menu <ArrowIcon /></button>
              <button className="w-full flex  justify-between gap-1  px-3 py-1  transition-all duration-300 absolute ">Menu <ArrowIcon /></button>
            </div>
          </div>
          </Link>
        </div>
  
        <p className="text-sm text-gray-600 py-2">{props.description}</p>
      </div>
      </div>
    )
  }

  
  export default Menucard;
  
  const ArrowIcon = () => {
    return (
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="#101828"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    )
  }
