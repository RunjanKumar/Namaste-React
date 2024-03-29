import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const JsxHeading = () => <h1 id="heading" className="head">  Namaste component for jsx</h1>
const heading = <h1 id="heading" className="head">  Namaste element for jsx</h1>
console.log(JsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// function based component creation
const FunctionComponent = () => {
    return (
   <div id= "container">
       {heading}
       <JsxHeading />
       <h1 id="heading" className="head">  Namaste react from Component</h1>
   </div>);
}

root.render(<FunctionComponent />);
