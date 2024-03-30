import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./utils/mockData";
import Header from "./src/Header";
import Restaurant from "./src/Restaurant";

// App Component
const AppLayOut = () => {
  const [restaurantLists, setrestaurantLists] = useState(restaurantList);
  return (
    <div className="app">
      <Header />
      <div className="filter">
        <button onClick={() => {
          const filterData = restaurantLists.filter((res) => res.info.avgRating >= 4);
          setrestaurantLists(filterData);
        }} className="filter-btn"> top rated Restaurant </button>
      </div>
      <div className="body">
         { restaurantLists.map((res) => {
            console.log('w');
            return <Restaurant key = {res.info.id} resData= {res.info}/>
         })  }
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
