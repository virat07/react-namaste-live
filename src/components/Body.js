import { useState } from "react";
import { Link } from "react-router-dom";
import { RestrauntCard } from "./RestrauntCard";
import { ShimmerComponent } from "./ShimmerUI";
// hooks is a normal functions
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";
import useOnline from "../utils/useOnline";
export default Body = () => {
  const [searchText, setSearchText] = useState("");
  const { filterRestaurants, allRestaurants } = useGetRestaurants();
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check you internet connection!!</h1>;
  }

  // conditional rendering:-
  return !allRestaurants ? (
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
        {filterRestaurants && filterRestaurants?.length === 0 ? (
          <h1>No Restaurant match you filter! </h1>
        ) : (
          filterRestaurants?.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                <RestrauntCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
