import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

function Table() {
  const returnedContext = useContext(Context); // poderia ter destruturado aqui, se houver tempo refatorar
  // console.log('returnedContext @ Table', returnedContext);
  const returnedPlanets = returnedContext.data;

  const removeResidents = returnedPlanets
    .map((planet) => Object.keys(planet).filter((item) => item !== 'residents'));

  const tableHeaders = removeResidents[0];
  const residentsIndex = 9;

  // tentei usar o .entries mas deu muito errado pra resgatar as infos necessarias depois
  /* const planetInfoArr = returnedPlanets.map((item) => Object.entries(item));
  planetInfoArr.map((item) => item.splice(residentsIndex, 1)); */

  // referencia do splice: https://love2dev.com/blog/javascript-remove-from-array/
  const planetInfo = returnedPlanets.map((item2) => Object.values(item2));
  planetInfo.map((item3) => item3.splice(residentsIndex, 1));

  // acabou que usar o values tbm não funcionou pq me retorna array de strings para cada valor de cada objeto
  // por isso não conseguia fazer as logicas das comparações, então refatorei kkkkrying
  // referencia do delete https://www.w3schools.com/howto/howto_js_remove_property_object.asp
  const newPlanetInfo = returnedPlanets.map((elem) => {
    delete elem.residents;
    return elem;
  });
  // console.log('newplanetInfo', newPlanetInfo);
  const finalNameFilter = newPlanetInfo
    .filter((item) => item.name.toLowerCase()
      .includes(returnedContext.nameFilter));

  // pra não ficar tão grande no retorno decidi extrair o filtro por nome para uma nova função
  /* const finalNameFilter = planetInfo
    .filter((item) => item[0].toLowerCase()
      .includes(returnedContext.nameFilter));
 */
  const finalNumberFilter = finalNameFilter
    .filter((element) => returnedContext.filterByNumbers.every((filters) => {
      if (filters.comparison === 'maior que') {
        return Number(element[filters.column]) > Number(filters.value);
      }
      if (filters.comparison === 'menor que') {
        return Number(element[filters.column]) < Number(filters.value);
      }
      if (filters.comparison === 'igual a') {
        return Number(element[filters.column]) === Number(filters.value);
      }
      return true; // só pra ver se o lint para de reclamar
    }));

  // console.log('qualquer coisa', finalNumberFilter);

  if (returnedPlanets.length < 1) {
    return (
      <div>Carregando...</div>
    );
  }
  return (
    <div>
      <h2>Star Wars Planet Search</h2>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={ header }>
                { header }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {finalNumberFilter.map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((cat) => (<td key={ cat }>{cat}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
