import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

// Composing Comopnentss
// NAMED EXPORT import is nothing but when we export a component without default keyword we use { } in the import
// whereas when we export using DEFAULT keywoard then we use just the component name! Also remember we can't export 2 components in default

// import { ComponentName } from './ component/' where { } doesn't means object destructing but it means
//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)

const AppLayout = () => {
  const [loggedIn, setLogin] = useState(true);

  return (
    <>
      <Header loggedIn={loggedIn} setLogin={setLogin} />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
