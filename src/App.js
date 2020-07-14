import React from 'react';
import PizzaBuilder from './HOC/PizzaBuilder';
import Pizza from "./Interfaces/Pizza";
import './App.css';


const PizzaProduct = PizzaBuilder(Pizza);

function App() {
  return (
      <PizzaProduct></PizzaProduct>
  );
}

export default App;
