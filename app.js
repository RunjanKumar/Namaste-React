import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./utils/mockData";
import Header from "./src/component/Header";
import Shimer from "./src/component/Shimer";
import Restaurant from "./src/component/Restaurant";

// App Component
const AppLayOut = () => {
  const [restaurantLists, setrestaurantLists] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("Body Rendered");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        restaurantList = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setrestaurantLists(restaurantList);
        setFilterData(restaurantList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   
    fetchData();
  }, []);
  if (restaurantLists.length === 0) {
    return (
      <>
        {" "}
        <Header />
        <Shimer />
      </>
    );
  }
  return (
    <div className="app">
      <Header />
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              console.log("target.value", e.target.value);
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("tttttttttttttt", searchText);
              const filterData = restaurantLists.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("444444444444", filterData);
              setFilterData(filterData);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterData = restaurantLists.filter(
              (res) => res.info.avgRating >= 4
            );
            setrestaurantLists(filterData);
          }}
          className="filter-btn"
        >
          {" "}
          top rated Restaurant{" "}
        </button>
      </div>
      <div className="body">
        {filterData.map((res) => {
          console.log("w");
          return <Restaurant key={res.info.id} resData={res.info} />;
        })}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
