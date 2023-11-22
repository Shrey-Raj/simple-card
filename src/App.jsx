import React, { useEffect, useState } from "react";
import { UserIcon, PhoneIcon } from "@heroicons/react/solid";
import "./App.css";

const Card = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, gender, phone, picture } = userData;

  return (
    <div className="par w-full flex justify-center items-center">
      <div className="card w-2/3 h-2/3 font-quicksand  bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
        <div className="border-r-2 border-gray-300 p-4">
          <img
            src={picture.large}
            className="w-56 h-56 object-cover rounded-full"
            alt="User"
          />
        </div>

        <div className="content p-4">
          <div>
            <h2 className="text-2xl text-pink-800 drop-shadow-sm">
              {name.title} {name.first} {name.last}
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-lg text-gray-600 capitalize ">
            <UserIcon className="h-4 w-4 inline mr-2"/>
              Gender: <span className="text-pink-700">{gender}</span>
            </p>
          </div>

          <div className="mt-2">
            <p className="text-lg text-gray-600">
            <PhoneIcon className="h-4 w-4 inline mr-1" />
            Phone: {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
