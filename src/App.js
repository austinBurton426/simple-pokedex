import React from "react";
import pokemon from "./components/Pokemon";
import "./components/style/App.css";

// const type = "Electric";
// const pokeFilter = data => {
//   return data.type.includes(type);
// };

// const pokeMap = data => {
//   const result = {
//     img: data.img,
//     name: data.name,
//     num: data.num,
//     type: data.type,
//     weaknesses: data.weaknesses
//   };
//   return result;
// };

// const pokeFiltered = pokemon.filter(pokeFilter);
// const pokeWeaknesses = pokeFiltered.map(pokeMap);

class App extends React.Component {
  state = {
    pokeWeaknesses: "",
    name: "",
    type: "",
    number: "",
    pokemonName: "",
    pokemonTypes: "",
    pokemonNumber: ""
  };

  handleNameSubmit = e => {
    if (e) e.preventDefault();
    const name = this.state.pokemonName;
    const pokeFilter = data => {
      return data.name.includes(name);
    };
    const pokeMap = data => {
      const result = {
        img: data.img,
        name: data.name,
        num: data.num,
        type: data.type,
        weaknesses: data.weaknesses
      };
      return result;
    };

    const pokeFiltered = pokemon.filter(pokeFilter);
    const filteredResult = pokeFiltered.map(pokeMap);
    console.log(filteredResult);
    this.setState({ pokeWeaknesses: filteredResult });
  };
  handleTypeSubmit = e => {
    if (e) e.preventDefault();
    const type = this.state.pokemonTypes;
    const pokeFilter = data => {
      return data.type.includes(type);
    };
    const pokeMap = data => {
      const result = {
        img: data.img,
        name: data.name,
        num: data.num,
        type: data.type,
        weaknesses: data.weaknesses
      };
      return result;
    };

    const pokeFiltered = pokemon.filter(pokeFilter);
    const filteredResult = pokeFiltered.map(pokeMap);
    console.log(filteredResult);
    this.setState({ pokeWeaknesses: filteredResult });
  };
  handleNumberSubmit = e => {
    if (e) e.preventDefault();
    const number = this.state.pokemonNumber;
    const pokeFilter = data => {
      return data.num.includes(number);
    };
    const pokeMap = data => {
      const result = {
        img: data.img,
        name: data.name,
        num: data.num,
        type: data.type,
        weaknesses: data.weaknesses
      };
      return result;
    };

    const pokeFiltered = pokemon.filter(pokeFilter);
    const filteredResult = pokeFiltered.map(pokeMap);
    console.log(filteredResult);
    this.setState({ pokeWeaknesses: filteredResult });
  };

  viewSearch = () => {
    let ourSearch = [];
    for (let i = 0; i < this.state.pokeWeaknesses.length; i++) {
      ourSearch.push(
        <div className="goldenBorder">
          <img src={this.state.pokeWeaknesses[i].img} />
          <br />
          Name: {this.state.pokeWeaknesses[i].name}
          <br />
          Number: {this.state.pokeWeaknesses[i].num}
          <br />
          Type: {this.state.pokeWeaknesses[i].type}
          <br />
          Weaknesses :{this.state.pokeWeaknesses[i].weaknesses}
        </div>
      );
    }
    return ourSearch;
  };

  render() {
    return (
      <div className="pokemon">
         <div>
          {this.viewSearch()}
        </div>
        <div>
          <form className="form">
            {/* Search By Name */}
            <input
              onChange={event =>
                this.setState({ pokemonName: event.target.value })
              }
              name="pokemonName"
              type="text"
              placeholder="Search By Name"
            />
            <button 
            className="button"
            onClick={this.handleNameSubmit} 
            type="onclick">
              Search Name
            </button>
            {/* search by type */}
            <input
              onChange={event =>
                this.setState({ pokemonTypes: event.target.value })
              }
              name="pokemonTypes"
              type="text"
              placeholder="Search By Type"
            />
            <button
            className="button1" 
            onClick={this.handleTypeSubmit} 
            type="onclick">
              Search Type
            </button>
            {/* Search By Number */}
            <input
              onChange={event =>
                this.setState({ pokemonNumber: event.target.value })
              }
              name="pokemonNumber"
              type="text"
              placeholder="Search By Number (1-151)"
            />
            <button
            className="button2" 
            onClick={this.handleNumberSubmit} 
            type="onclick">
              Search Number
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
