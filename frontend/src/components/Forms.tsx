import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import axios from "axios";
import backgroundimg from "../assets/bgimg.png";
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
<<<<<<< HEAD
  const [isTransitioning, setIsTransitioning] = useState(false); // State to handle form transitions

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "";

=======
  const [isRestaurant, setisRestaurant] = useState<Boolean>(false)


  const toggleForm = () => {
    setisRestaurant(!isRestaurant);
  }
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ""; 
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${backendUrl}/getuser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [backendUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const endpoint = showForm === "signup" ? "register" : "login";
      const response = await axios.post(`${backendUrl}/user/${endpoint}`, formData);
      if (response) {
        alert(showForm === "signup" ? "User Registered successfully" : "User signed in successfully");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [focusedInput, setFocusedInput] = useState<keyof FormData | null>(null);

  const InputField = ({
    label,
    type,
    name,
    required = true,
  }: {
    label: string;
    type: string;
    name: keyof FormData;
    required?: boolean;
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (focusedInput === name) {
        inputRef.current?.focus();
      }
    }, [focusedInput, name]);

    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-lg text-gray-800 m-1">
          {label}:
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          ref={inputRef}
          onFocus={() => setFocusedInput(name)}
          onBlur={() => setFocusedInput(null)}
          className="block w-full px-4 py-2 mt-1 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    );
  };

  // Handle form transitions with animation
  const triggerFormTransition = (newForm: "signup" | "Login" | "restaurant") => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowForm(newForm);
      setIsTransitioning(false);
    }, 500); // Adjust the timing of the animation
  };

  if (userDetails) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-2xl">Welcome, {userDetails.name}</h1>
        <p>Email: {userDetails.email}</p>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div
      className={`flex m-3 sm:m-0 flex-col items-center justify-center min-h-screen mt-1 py-4 ${
        isTransitioning ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: "cover" }}
    >
      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-lg max-w-md w-full ${
          isTransitioning ? "animate-fadeOut" : "animate-fadeIn"
        }`}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          {showForm === "signup" ? "Sign Up" : "Login"}
        </h2>
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
        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none transition duration-300 ease-in-out"
        >
          Submit
        </button>
        <div className="mt-4 text-center">
          {showForm === "signup" ? (
            <>
              <p onClick={() => triggerFormTransition("Login")} className="text-green-600 cursor-pointer hover:underline">
                Already a user? Login
              </p>
              <p onClick={() => triggerFormTransition("restaurant")} className="text-green-600 cursor-pointer hover:underline">
                Join as restaurant? Register now
              </p>
            </>
          ) : showForm === "Login" ? (
            <>
              <p onClick={() => triggerFormTransition("signup")} className="text-green-600 cursor-pointer hover:underline">
                New Here? Signup
              </p>
              <p onClick={() => triggerFormTransition("restaurant")} className="text-green-600 cursor-pointer hover:underline">
                Join as restaurant? Register now
              </p>
            </>
          ) : (
            <p className="text-gray-400">SERVICE WILL BE OUT SOON</p>
          )}
        </div>
      </form>
      {/* Food Animation */}
      {isTransitioning && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="text-6xl animate-bounce">🍕</div>
        </div>
      )}
    </div>
=======
    <>

          {isRestaurant ? (<>
          
          <RestaurantAuth close={toggleForm} />
          </>) : (

            <div className="flex m-3 sm:m-0 flex-col items-center justify-center min-h-screen mt-1 py-4"
         style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover' }}>

            <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{showForm === "signup" ? "Sign Up" : "Login"}</h2>
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
              <button type="submit" className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none transition duration-300 ease-in-out">
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

    
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
  );
};

export default Forms;
