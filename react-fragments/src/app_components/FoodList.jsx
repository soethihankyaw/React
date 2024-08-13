import PropTypes from "prop-types";
import "./food_list.css";

const FoodList = (props) => {
  return (
    <>
      <ul>
        <li>{props.foodOne}</li>
        <li>{props.foodTwo}</li>
        <li>{props.foodThree}</li>
      </ul>
    </>
  );
};

FoodList.propTypes = {
  foodOne: PropTypes.string.isRequired,
  foodTwo: PropTypes.string.isRequired,
  foodThree: PropTypes.string.isRequired,
};

export default FoodList;
