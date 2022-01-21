function ShipData(props) {
  return (
    <div>
      <ul id="list">
        <li>{props.ship.name}</li>
        <li>Cost: {props.ship.cost_in_credits}</li>
        <li>Length: {props.ship.length}</li>
        <li>Passenger: {props.ship.passengers}</li>
      </ul>
    </div>
  );
}

export default ShipData;
