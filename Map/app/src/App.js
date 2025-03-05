import "./App.css";
import DessertsList from "./components/DesertsList"
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
    image: require("./assets/Chocolate cake.jpeg"),
  },
  {
    name: "Ice Cream",
    calories: 200,
    description: "Smooth and creamy vanilla ice cream, perfect for a hot day.",
    image: require("./assets/Ice cream.jpg"),
  },
  {
    name: "Tiramisu",
    calories: 300,
    description: "A classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
    image: require("./assets/Tiramisu.jpg"),
  },
  {
    name: "Cheesecake",
    calories: 600,
    description: "A decadent cheesecake with a buttery graham cracker crust and a rich cream cheese filling.",
    image: require("./assets/Cheesecake.jpg"),
  },
  {
    name: "Brownie",
    calories: 450,
    description: "Fudgy and chewy chocolate brownies, perfect for chocolate lovers.",
    image: require("./assets/brownie.jpg"),
  },
];


function App() {
  return (
    <div className="container">
      <h2 className="title">List of low calorie desserts:</h2>
      <DessertsList data={desserts} lowCal={true}/>
      <h2 className="title">All desserts:</h2>
      <DessertsList data={desserts} lowCal={false}/>
    </div>
  );
}

export default App;
