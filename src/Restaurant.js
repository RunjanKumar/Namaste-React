import { CDN_URL, ratting_Star_URL } from "../utils/constant";

const Restaurant = (props) => {
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = props.resData;
  return (
    <>
      <div className="restaurant">
        <div className="food">
          <img src={CDN_URL + cloudinaryImageId} />
        </div>
        <div className="food-details">
          <h2> {name} </h2>
          <h3> {cuisines.join(", ")} </h3>
          <h3>
            <img className="rating-image" src={ratting_Star_URL} />
            {avgRatingString} Rating
          </h3>
          <h3> {sla?.deliveryTime} minute</h3>
          <h2> {costForTwo} </h2>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
