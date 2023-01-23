import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // help us create routing;
// RouterProvider is coming from react router rom which is a component which will provide the create brower router the app.
//Outlet is a component from react router dom which will be filled by children configuration. so that we can have header footer and in between we can outlet components.
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import SignupForm from "./components/Login";
import Profile from "./components/Profile";
import { ShimmerComponent } from "./components/ShimmerUI";
// Composing Comopnentss
// NAMED EXPORT import is nothing but when we export a component without default keyword we use { } in the import
// whereas when we export using DEFAULT keywoard then we use just the component name! Also remember we can't export 2 components in default

// import { ComponentName } from './ component/' where { } doesn't means object destructing but it means
//Config Driven UI

// logical bunlding is better than bundling everything in one bundle.
// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import
// when we are loading the component on demand react try to suspend it. Therefore throws the error. So to handle that wrap the component to Suspense because this for react also it's the suspense whether it will load or not!
//Fallback in suspense is for showing the component until the required bundle is loaded!
const InstaMart = lazy(() => import("./components/InstaMart")); // lazy import
const About = lazy(() => import("./components/About")); // it's a promise from lazy that it will be imported
// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
// routing configuration
const AppLayout = () => {
  const [loggedIn, setLogin] = useState(true);
  useEffect(() => {
    const checkLoginUser = localStorage.getItem("login");
    setLogin(checkLoginUser);
  }, []);
  const handleUser = () => {
    if (loggedIn) localStorage.clear();
    setLogin(!loggedIn);
  };

  return !loggedIn ? (
    <SignupForm handleUser={handleUser} />
  ) : (
    <>
      <Header setLogin={handleUser} />
      <Outlet />
      {/* <About />
      <Body />
      <Contact /> */}
      <Footer />
    </>
  );
};
// I want to render my about in between header and footer for that i have to make my applayout as a children of it. using children keyword.

const appRouter = createBrowserRouter([
  // if there is / in the URL load that page
  // for a path like /about/profile it will be like, children of children so
  /* {
    path: "/about",
    element: <About />,
    children:[ 
      path:"profile", it will assume that it's http://serveraddress/about/profile
      element:<Profile/>
    ]
   } */
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id", // dynamic id
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// now root will render according to app router
//SPA- single page application
// 2 types of routing:- 1. client side routing 2. server side routing
// childrens in the app router are always render in the outlets
