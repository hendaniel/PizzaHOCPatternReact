import React, { useState } from "react";

const PizzaBuilder = (Pizza) =>
  function Component() {
    const [state, setState] = useState({
      tamaño: 0,
      invitados: 0,
      porcion: 0,
    });

    const handleClear = () => {
      setState({ tamaño: 0, invitados: 0, porcion: 0 });
    };
    const handleChange = (e, key) => {
      const value = e.target.value;
      setState({ ...this.state, [key]: value });
    };

    const pizzas = Math.ceil((state.invitados * state.porcion) / state.tamaño);
    return (
      <Pizza
        values={state}
        pizzas={pizzas}
        handleInputChange={handleChange}
        handleClear={handleClear}
      />
    );
  };

export default PizzaBuilder;
