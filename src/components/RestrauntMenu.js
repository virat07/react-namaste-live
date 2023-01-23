import React from "react";
import { useParams } from "react-router-dom"; // reading id from the browser url
import { IMG_CDN_URL } from "./config";
import { ShimmerComponent } from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  // const [menuData, setMenuData] = useState(null);
  const { id } = useParams();
  const menuData = useRestaurant(id);

  return !menuData ? (
    <ShimmerComponent />
  ) : (
    <div className="menu">
      <div>
        <h1>{menuData.name}</h1>
        <img
          src={IMG_CDN_URL + menuData.cloudinaryImageId}
          alt={menuData.data}
        />
        <h3>{menuData.area}</h3>
        <h3>{menuData.city}</h3>
        <h3>{menuData.avgRating}</h3>
        <h3>{menuData.costForTwoMsg}</h3>
      </div>
      {/* object values making it in array */}
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menuData?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
