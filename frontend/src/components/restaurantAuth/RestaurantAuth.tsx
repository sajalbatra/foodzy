import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import backgroundimg from "../../assets/bgimg.png";

// Define the form data interface for restaurant


interface RestaurantAuthProps {
    close: () => void;
}
  

const RestaurantAuth: React.FC<RestaurantAuthProps> = ({
    close
}) => {
  const [isSignup, setIsSignup] = useState(true); 
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
    description: '',
    password: '',
    email: '',
    username: '',
  });
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ""; 
  

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    if (name.includes('latitude') || name.includes('longitude')) {
      setFormData((prevData) => ({
        ...prevData,
        coordinates: {
          ...prevData.coordinates,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
    }

    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            setFormData((prevData) => ({
                ...prevData,
                coordinates: {
                    latitude: lat.toString(),
                    longitude: long.toString(),
                },
            }))
            
        },
        (error) => {
            console.error('Error getting location:', error);
            alert('Failed to get location. Please try again.');
            
        }
    );
};



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = isSignup ? "restaurant/signup" : "restaurant/login"; // Adjust endpoint as needed

    const data = new FormData();

    if (isSignup) {
      data.append('restaurantName', formData.name);
      data.append('address', formData.address);
      data.append('coordinates', JSON.stringify(formData.coordinates));
      data.append('description', formData.description);
      data.append('password', formData.password);
      data.append('email', formData.email);
      data.append('username', formData.username);
    } else {
      data.append('email', formData.email);
      data.append('password', formData.password);
    }

    console.log({formData})
    try {
      const response = await axios.post(`${backendUrl}/${endpoint}`, formData);
      if(response.status){
          alert(isSignup ? "Registered successfully" : "Logged in successfully");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error occurred, please try again.");
    }
  };

  return (
    <div className="flex m-3 sm:m-0 flex-col items-center justify-center min-h-screen mt-1 py-4"
         style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover' }}>
      <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          {isSignup ? "Restaurant Sign Up" : "Restaurant Login"}
        </h2>

        {isSignup && (
          <>
            <InputField label="Restaurant Name" type="text" name="name" value={formData.name} onChange={handleChange} />
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
            <InputField label="Address" type="text" name="address" value={formData.address} onChange={handleChange} />
            <InputField label="Description" type="text" name="description" value={formData.description} onChange={handleChange} />
            <InputField label="Username" type="text" name="username" value={formData.username} onChange={handleChange} />
            <div className='flex justify-between gap-3 items-center'>
                <InputField label="Latitude" type="text" name="latitude" value={formData.coordinates.latitude} onChange={handleChange} />
                <InputField label="Longitude" type="text" name="longitude" value={formData.coordinates.longitude} onChange={handleChange} />
                <button
                    type="button"
                    onClick={handleLocationClick}
                    className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-500 max-h-12 "
                >
                    Get
                </button>

            </div>
          </>
        )}

        {!isSignup && (
          <>
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
          </>
        )}

        <button type="submit" className="block w-full px-4 py-2 mt-4 text-xl font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none transition duration-300 ease-in-out">
          Submit
        </button>

        <div className="mt-4 text-center">
          <p onClick={() => setIsSignup(!isSignup)} className="text-green-600 cursor-pointer hover:underline">
            {isSignup ? "Already a restaurant? Login" : "New Restaurant? Signup"}
          </p>
          <p onClick={() => close()} className="text-green-600 cursor-pointer hover:underline">Wanna be a user? Signup</p>
        </div>
      </form>
    </div>
  );
};


const InputField = ({ label, type, name, value, onChange }: { label: string; type: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-lg text-gray-800 m-1">{label}:</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="block w-full px-4 py-2 mt-1 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

export default RestaurantAuth;
