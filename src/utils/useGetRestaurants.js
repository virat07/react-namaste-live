import { useState, useEffect } from "react";
import { FETCH_ALL_RESTAURENTS } from "../components/config";

const useGetRestaurants = () => {
  // set state

  //get api data

  //return filteredData;
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  //if no depenedency is added then it will be called on every render.

  //cdn is used for storing img
  async function getRestaurants() {
    const data = await fetch(FETCH_ALL_RESTAURENTS);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return {
    filterRestaurants,
    allRestaurants,
  };
};

export default useGetRestaurants;
