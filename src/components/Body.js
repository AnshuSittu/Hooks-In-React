import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state Variable

  const [ListOfRestaurant, setListOfRestaurant] = useState([
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334476",
        name: "Meghana Foods",
        cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood",
        ],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        avgRating: "4.5",
      },
    },

    {
      data: {
        id: "334478",
        name: "Spices",
        cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood",
        ],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        avgRating: "4.5",
      },
    },
  ]);

  //Normal JS variable
  // let ListOfRestaurantJS = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 36,
  //       minDeliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },

  //   {
  //     data: {
  //       id: "334476",
  //       name: "Meghana Foods",
  //       cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  //       cuisines: [
  //         "Biryani",
  //         "Andhra",
  //         "South Indian",
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //       ],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 36,
  //       minDeliveryTime: 36,
  //       avgRating: "4.5",
  //     },
  //   },

  //   {
  //     data: {
  //       id: "334478",
  //       name: "Spices",
  //       cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  //       cuisines: [
  //         "Biryani",
  //         "Andhra",
  //         "South Indian",
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //       ],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 36,
  //       minDeliveryTime: 36,
  //       avgRating: "4.5",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            
            const filteredList = ListOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
           setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
