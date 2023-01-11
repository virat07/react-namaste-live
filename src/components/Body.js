import { useState } from "react";
import { restrautList } from "./config";
import { RestrauntCard } from "./RestrauntCard";
// hooks is a normal functions

export default Body = () => {
  //searchText is a local variable
  // To create state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);
  //why state variables?- 
  const filterData = (searchText, restaurants)=>{
    if(searchText)
    return restrautList.filter((restaurant)=>restaurant.data.name.includes(searchText));
    else 
    return restrautList;

  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input "
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn"
        onClick={()=>{
          const data = filterData(searchText,restaurants);
          setRestaurants(data);
        }}
        >Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
