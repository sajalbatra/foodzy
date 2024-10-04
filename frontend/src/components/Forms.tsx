import { useState, ChangeEvent, FormEvent, useEffect } from "react";
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const endpoint = showForm === "signup" ? "register" : "login";
      const response = await axios.post(`${backendUrl}/${endpoint}`, formData);
      if (response) {
        alert(showForm === "signup" ? "User Registered successfully" : "User signed in successfully");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const InputField = ({ label, type, name, required = true }: { label: string, type: string, name: keyof FormData, required?: boolean }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-xl text-white">{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="block w-full px-4 py-2 mt-1 bg-gray-200 rounded-lg focus:outline-none focus:bg-white/50"
      />
    </div>
  );

  if (userDetails) {
    return (
      <div>
        <h1>Welcome {userDetails.name}</h1>
        <p>Email: {userDetails.email}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-1"
         style={{ backgroundImage: `url(${backgroundimg})` }}>
      <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md bg-[#474747] backdrop-blur-lg">
        {showForm === "signup" && (
          <>
            <InputField label="Name" type="text" name="name" />
            <InputField label="Username" type="text" name="userName" />
            <InputField label="Phone Number" type="text" name="phoneNumber" />
          </>
        )}
        {showForm === "Login" && (
          <>
            <InputField label="Username" type="text" name="userName" required={false} />
            <p className="text-center text-white">OR</p>
            <InputField label="Email" type="email" name="email" />
          </>
        )}
        {showForm !== "restaurant" && (
          <>
            <InputField label="Email" type="email" name="email" />
            <InputField label="Password" type="password" name="password" />
          </>
        )}
        <button type="submit" className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none">
          Submit
        </button>
        <div className="mt-4 text-center">
          {showForm === "signup" ? (
            <>
              <p onClick={() => setShowForm("Login")} className="text-blue-500 cursor-pointer hover:underline">Already a user? Login</p>
              <p onClick={() => setShowForm("restaurant")} className="text-blue-500 cursor-pointer hover:underline">Join as restaurant? Register now</p>
            </>
          ) : showForm === "Login" ? (
            <>
              <p onClick={() => setShowForm("signup")} className="text-blue-500 cursor-pointer hover:underline">New Here? Signup</p>
              <p onClick={() => setShowForm("restaurant")} className="text-blue-500 cursor-pointer hover:underline">Join as restaurant? Register now</p>
            </>
          ) : (
            "SERVICE WILL BE OUT SOON"
          )}
        </div>
      </form>
    </div>
  );
};

export default Forms;
