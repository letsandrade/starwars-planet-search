import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

function Table() {
  const returnedPlanets = useContext(Context);

  const removeResidents = returnedPlanets
    .map((planet) => Object.keys(planet).filter((item) => item !== 'residents'));

  const tableHeaders = removeResidents[0];
  // console.log('----------', tableHeaders);
  const residentsIndex = 9;
  /* const planetInfoArr = returnedPlanets.map((item) => Object.entries(item));
  planetInfoArr.map((item) => item.splice(residentsIndex, 1));
  // console.log(planetInfoArr); */
  const planetInfo = returnedPlanets.map((item2) => Object.values(item2));
  // console.log('++++++', newArr);
  planetInfo.map((item3) => item3.splice(residentsIndex, 1));
  // console.log('------', planetInfo);

  if (returnedPlanets.length < 1) {
    return (
      <div>Carregando...</div>
    );
  }
  return (
    <div>
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
          {planetInfo.map((planet) => (
            <tr key={ planet[0] }>
              {planet.map((cat) => (<td key={ cat }>{cat}</td>))}
            </tr>
          ))}
          {/*   <tr>
            {returnedPlanets.map((planet) => (
              <td key={ planet.name }>
                {planet.name}
              </td>
            ))}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
