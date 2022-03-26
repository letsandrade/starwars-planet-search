import React, { useContext } from 'react';
import Context from '../context/Context';

function Nav() {
  const { nameFilter, setNameFilter } = useContext(Context);

  return (
    <div>
      <h3>aqui vai ser a caixa de busca</h3>
      <input
        type="text"
        placeholder="digite algo para filtrar"
        value={ nameFilter }
        onChange={ ({ target }) => setNameFilter(target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Nav;
