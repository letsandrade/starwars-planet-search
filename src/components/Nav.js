import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import './Nav.css';

function Nav() {
  const { nameFilter,
    setNameFilter,
    filterByNumbers,
    setFilterByNumbers } = useContext(Context);

  const [numberFilters, setNumberFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const optionArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleChange = ({ target }) => {
    setNumberFilters({
      ...numberFilters,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    setFilterByNumbers([
      ...filterByNumbers,
      numberFilters,
    ]);
  };

  return (
    <div>
      <h3>busca por nome</h3>
      <input
        type="text"
        placeholder="digite para filtrar"
        value={ nameFilter }
        onChange={ ({ target }) => setNameFilter(target.value) }
        data-testid="name-filter"
      />
      <form>
        <p>Filtros numericos</p>
        <select
          name="column"
          id="column-filter"
          onChange={ handleChange }
          data-testid="column-filter"
        >
          {optionArr.map((item) => (<option key={ item } value={ item }>{item}</option>))}
        </select>
        <select
          name="comparison"
          id="comparison-filter"
          onChange={ handleChange }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          placeholder="digite um valor"
          value={ numberFilters.value }
          onChange={ handleChange }
          data-testid="value-filter"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          filtrar
        </button>
      </form>
    </div>
  );
}

export default Nav;
