/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      name: "John Doe",
      email: "john@gmail.com",
      number: "1234567890",
      product: "Product A",
    },
    {
      name: "Jane Smith",
      email: "jane@gmail.com",
      number: "9876543210",
      product: "Product B",
    },
    // Add more cards as needed
  ]);
  const navigate = useNavigate();

  // State for sorting criterion
  const [sortCriterion, setSortCriterion] = useState("");

  // Sorting function
  const sortCards = (criterion) => {
    let sortedCards;
    if (criterion === "name") {
      sortedCards = [...cards].sort((a, b) => a.name.localeCompare(b.name));
    } else if (criterion === "email") {
      sortedCards = [...cards].sort((a, b) => a.email.localeCompare(b.email));
    }
    setCards(sortedCards);
  };

  return (
    <div className="mt-4 min-h-[25rem]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative md:ml-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              // aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none focus:ring-[#6947BF] focus:border-[#6947BF] "
            placeholder="Search by title..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <div>
            {/* <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label> */}
            <select
              id="countries"
              className="bg-gray-50 w-[7rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              onChange={(e) => {
                setSortCriterion(e.target.value);
                sortCards(e.target.value);
              }}
            >
              <option selected>Sort by</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
          </div>

          <button
            type="button"
            className="text-white w-[7rem] bg-[#2F3A70] hover:bg-[#202a5f] font-medium rounded-lg text-sm px-5 py-2.5 md:me-8"
            onClick={() => navigate("/createPost")}
          >
            Create Post
          </button>
        </div>
      </div>

      <div className="p-6 px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.length > 0 &&
            cards.map((item, index) => (
              <div
                key={index}
                className="p-6 h-auto bg-white border border-gray-200 rounded-lg shadow "
              >
                <p className="">
                  <span className="font-semibold">Name:</span> {item.name}
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Email id:</span> {item.email}
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Number:</span> {item.number}
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Product:</span> {item.product}
                </p>

                <div className="flex justify-between items-center mt-4 ">
                  <button
                    type="button"
                    className="text-white w-[6rem]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                    onClick={() => navigate(`/editPost/${1}`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-white w-[6rem] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
