import { Link } from "react-router-dom";
function StarShips(props) {
  return (
    <div className="box">
      <ul id="list">
        <Link to={`/StarData${props.index}`}>
          {" "}
          <li>{props.ship.name}</li>
        </Link>
        <li>Cost: {props.ship.cost_in_credits}</li>
        <li>Length: {props.ship.length}</li>
        <li>Passenger: {props.ship.passengers}</li>
      </ul>
    </div>
  );
}

export default StarShips;
