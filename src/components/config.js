export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const validateObject = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/v4/full?lat=32.7060625&lng=74.8803125&menuId=";

export const FETCH_ALL_RESTAURENTS =  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6658525&lng=73.7654367&page_type=DESKTOP_WEB_LISTING"