import { useState, ChangeEvent, FormEvent,useEffect } from "react";
import axios from 'axios';
import backgroundimg from "../assets/bgimg.png";

interface FormData {
  name: string;
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
}
interface UserDetails {
  name: string;
  email: string;
  // Add other properties as needed
}
const Forms: React.FC = () => {
  const [showform, setshowform] = useState<"signup" | "Login" | "resturant">("signup");
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    // Check if token exists in the browser's local storage
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user details using the token
      axios.get(`${backendurl}/getuser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserDetails(response.data);
        // Handle successful response here if needed
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let response;
      if (showform === "signup") {
        response = await axios.post(`${backendurl}/register`, formData);
        if(response){
          alert("User Registered successfully")
        }
      } else if (showform === "Login") {
        response = await axios.post(`${backendurl}/login`, formData);
        if(response){
          alert("User signed in successfully")
        }
      }
      // Handle the response accordingly
      console.log(response?.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const backendurl="https://foodzy-backend.vercel.app/api/v1/user";

  if (userDetails) {
    // User details available, display them
    return (
      <div>
        <h1>Welcome {userDetails.name}</h1>
        <p>Email: {userDetails.email}</p>
        {/* Render other user details as needed */}
      </div>
    );
  }
else{
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
}
};

export default Forms;
