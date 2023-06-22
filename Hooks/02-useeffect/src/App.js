import { Fragment, useState } from "react";

function App() {

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  })

  const updateColor = () => {
      setCar( previousState => {
        return {
          ...previousState, color: 'blue'
        }
      })
  }


  return (
    <Fragment>
      <h1>My {car.brand} </h1>
      <p>It is a {car.color} {car.model} from {car.year} </p>
      <button
        onClick={updateColor}
      >
        Blue
      </button>
    </Fragment>

  );
}

export default App;
