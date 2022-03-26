import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

function Table() {
  const returnedContext = useContext(Context);
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
          {planetInfo.filter((item) => item[0].toLowerCase()
            .includes(returnedContext.nameFilter))
            .map((planet) => (
              <tr key={ planet[0] }>
                {planet.map((cat) => (<td key={ cat }>{cat}</td>))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
