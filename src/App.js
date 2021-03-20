import React from "react";

export default class App extends React.Component {
  render() {
    const cars = ["Audi", "Alfa Romeo", "BMW", "Opel", "Skoda", "Volvo"];
    return (
      <div>
        {cars.map(car => (
          <CarMap key={car} carName={car} />//key jest tylko react
        ))}

        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
class MyButton extends React.Component {
  handClick = () => {
    alert(this.props.alertText);
  };

  render() {
    return <button onClick={this.handClick}>{this.props.clik}</button>;
  }
}

class CarMap extends React.Component {
  render() {
    return <h1>{this.props.carName}!!!</h1>;
  }
}
