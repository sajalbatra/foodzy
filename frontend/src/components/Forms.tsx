import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import axios from 'axios';
import backgroundimg from "../assets/bgimg.png";
import toast, { Toaster } from 'react-hot-toast';
import RestaurantAuth from "./restaurantAuth/RestaurantAuth";

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
}

const Forms: React.FC = () => {
  const [showForm, setShowForm] = useState<"signup" | "Login" | "restaurant">("signup");
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [isRestaurant, setisRestaurant] = useState<Boolean>(false)


  const toggleForm = () => {
    setisRestaurant(!isRestaurant);
  }
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ""; 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${backendUrl}/getuser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
    }
  }, [backendUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const endpoint = showForm === "signup" ? "register" : "login";
      const response = await axios.post(`${backendUrl}/${endpoint}`, formData);      if (response) {
        // alert(showForm === "signup" ? "User Registered successfully" : "User signed in successfully");
       toast.success(showForm === "signup" ? "User Registered successfully" : "User logged in successfully");
      }
    } catch (error) {
      toast.error("Error submitting form");
      console.error('Error submitting form:', error);
    }
  };

  const [focusedInput, setFocusedInput] = useState<keyof FormData | null>(null); // Track focused input

  const InputField = ({ label, type, name, required = true }: { label: string, type: string, name: keyof FormData, required?: boolean }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (focusedInput === name) {
        inputRef.current?.focus();
      }
    }, [focusedInput, name]);

    return (
      <div className="mb-4">
        <Toaster position="top-right" reverseOrder={false} />
        <label htmlFor={name} className="block m-1 text-lg text-gray-800">{label}:</label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          ref={inputRef}
          onFocus={() => setFocusedInput(name)} // Set focused input on focus
          onBlur={() => setFocusedInput(null)} // Clear focused input on blur
          className="block w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    );
  };

  if (userDetails) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-900">
        <h1 className="text-2xl">Welcome, {userDetails.name}</h1>
        <p>Email: {userDetails.email}</p>
      </div>
    );
  }

  return (
    <>

          {isRestaurant ? (<>
          
          <RestaurantAuth close={toggleForm} />
          </>) : (

            <div className="flex flex-col items-center justify-center min-h-screen py-4 m-3 mt-1 sm:m-0"
         style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover' }}>

            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-80 backdrop-blur-lg">
              <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">{showForm === "signup" ? "Sign Up" : "Login"}</h2>
              {showForm === "signup" && (
                <>
                  <InputField label="Name" type="text" name="name" />
                  <InputField label="Username" type="text" name="userName" />
                  <InputField label="Phone Number" type="text" name="phoneNumber" />
                  <InputField label="Email" type="email" name="email" />
                  <InputField label="Password" type="password" name="password" />
                </>
              )}
              {showForm === "Login" && (
                <>
                  <InputField label="Username" type="text" name="userName" required={false} />
                  <InputField label="Email" type="email" name="email" />
                  <InputField label="Password" type="password" name="password" />
                </>
              )}
              <button type="submit" className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white transition duration-300 ease-in-out bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                Submit
              </button>
              <div className="mt-4 text-center">
                {showForm === "signup" ? (
                  <>
                    <p onClick={() => setShowForm("Login")} className="text-green-600 cursor-pointer hover:underline">Already a user? Login</p>
                    <p onClick={() => toggleForm()} className="text-green-600 cursor-pointer hover:underline">Join as restaurant? Register now</p>
                  </>
                ) : showForm === "Login" ? (
                  <>
                    <p onClick={() => setShowForm("signup")} className="text-green-600 cursor-pointer hover:underline">New Here? Signup</p>
                    <p onClick={() => toggleForm()} className="text-green-600 cursor-pointer hover:underline">Join as restaurant? Register now</p>
                  </>
                ) : (
                  <p className="text-gray-400">SERVICE WILL BE OUT SOON</p>
                )}
              </div>
            </form>
            </div>
            
          )}
</>

    
  );
};

export default Forms;
