import "bootstrap/dist/css/bootstrap.min.css";
import cinnamonImage from "./assets/Cinnamon.jpg";
import friedChickenImage from "./assets/FriedChicken.jpg";
import headerImage from "./assets/Header.jpg";
import matchaImage from "./assets/Matcha.jpg";
import nuggetImage from "./assets/Nugget.jpg";
import { Card } from "react-bootstrap";

function MenuItem({ name, price, nutritionalInfo, image }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name} | {price}</Card.Title>
        <Card.Text>
          <NutritionalInfo nutritionalInfo={nutritionalInfo} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

function Category({ title, children}) {
  return (
    <>
      <div className="my-4">
        <h2 className="text-center">{title}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {children}
        </div>
      </div>
    </>
  );
};

const friedChicken = (
  <>
    <MenuItem
      image={friedChickenImage}
      name={"2pc Fried Chicken Set"}
      price={"RM 10.00"}
      nutritionalInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29}}
    />
    <MenuItem
      image={nuggetImage}
      name={"6 piece Nugget"}
      price={"RM 6.00"}
      nutritionalInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16}}
    />
  </>
);

const desserts = (
  <>
    <MenuItem
      image={cinnamonImage}
      name={"Cinnamon Ice Cream"}
      price={"RM 12.00"}
      nutritionalInfo={{ calories: 300, protein: 6, carbs: 60, fat: 20}}
    />
    <MenuItem
      image={matchaImage}
      name={"Matcha Ice Cream"}
      price={"RM 13.00"}
      nutritionalInfo={{ calories: 300, protein: 5, carbs: 33, fat: 22}}
    />
  </>
);

function NutritionalInfo({ nutritionalInfo }) {
  return (
    <div>
      <p>Calories: {nutritionalInfo?.calories} kcal</p>
      <p>Protein: {nutritionalInfo?.protein} g</p>
      <p>Carbs: {nutritionalInfo?.carbs} g</p>
      <p>Fat: {nutritionalInfo?.fat} g</p>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <img
        src={headerImage}
        alt="Wymen Fried Chicken Header"
        style={{ width: '100%', maxHeight: '100%', object: 'cover'}}
      />
      <h1 className="my-4 text-center">Wymen Fried Chicken Menu</h1>
      <Category title={"Fried Chicken"} children={friedChicken} />
      <Category title={"Desserts"} children={desserts} />
    </div>
  );
};

export default App
