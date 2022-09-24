import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" />
        {planets.map((planet, index) => (<PlanetCard
          key={ index }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </>
    );
  }
}

export default SolarSystem;
