import FoodList from "./app_components/FoodList";
import Header from "./app_components/Header";

export default function App() {
  return (
    <div>
      <Header heading="My Favourite Foods" />
      <FoodList foodOne="Pizza" foodTwo="Chicken" foodThree="Beer" />
    </div>
  );
}
