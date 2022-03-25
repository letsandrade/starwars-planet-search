async function fetchAPI() {
  const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const result = data.json();
  return result;
}

export default fetchAPI;
