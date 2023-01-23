import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  //Get data from API
  useEffect(() => {
    fetchMenu();
  }, []);
  async function fetchMenu() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
