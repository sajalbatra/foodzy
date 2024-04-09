import { useState } from "react";
import backgroundimg from "../assets/bgimg.png";

const Forms = () => {
  const [showform, setshowform] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to the backend
    console.log(formData);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen mt-1 "
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      {showform == "signup" ? (
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-md bg-[#474747] backdrop-blur-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-xl text-white">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-xl text-white">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-xl text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <button
            type="submit"
            className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Submit
          </button>
          <p
            onClick={() => {
              setshowform("Login");
            }}
            className="text-center text-blue-500 cursor-pointer hover:underline"
          >
            Already a user? Login
          </p>
          <p onClick={()=>{setshowform("resturant")}} className="text-center text-blue-500 cursor-pointer hover:underline">
        Join as restaurant? Register now
      </p>
        </form>
      ) : showform == "Login" ? (
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-md bg-[#474747] backdrop-blur-lg"
        >
          <div className="mb-4">
            <label htmlFor="userName" className="block text-xl text-white">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <p className="text-center text-white ">OR</p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-xl text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
            />
          </div>
          <button
            type="submit"
            className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Submit
          </button>
          <p
            onClick={() => {
              setshowform("signup");
            }}
            className="text-center text-blue-500 cursor-pointer hover:underline"
          >
            New Here? Signup
          </p>
          <p className="text-center text-blue-500 cursor-pointer hover:underline" onClick={()=>{setshowform("resturant")}}>
        Join as restaurant? Register now
      </p>
        </form>
      ) : showform=="resturant" ? "SERVICE WILL BE OUT SOON"
    :null
    }
      
    </div>
  );
};

export default Forms;
