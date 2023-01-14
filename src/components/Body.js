import { useEffect, useState } from "react";
import { restrautList } from "./config";
import { RestrauntCard } from "./RestrauntCard";
import { ShimmerComponent } from "./ShimmerUI";
// hooks is a normal functions

export default Body = () => {

  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7060625&lng=74.8803125&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // conditional rendering:-
  return allRestaurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input "
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants.length === 0 ? (
          <h1>No Restaurant match you filter! </h1>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};
