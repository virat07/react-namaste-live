import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create State here
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Profile class component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>{
            // we never mutate state directlu 
            // this.state = something
            this.setState({
                count: 1
            })
        }}>
            count
        </button>
      </>
    );
  }
}

//most important method of a class based component is render function.
//render method returns some jsx.

export default ProfileClass;

// why extends? because we need to inherit some properties so that react know's it's a react component;
// to access the passed props you need to use the keyword "this" and then props.
// A class has a constructor.

// homework:- why do we do super(props);
/* Phases:-
 1. Render phase (constructor, render method)
 2. commit phase (place actually modifying the dom)
 3. component did mount is called after the initial render is finished! 
*/