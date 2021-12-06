export default async function fetchPlanetsAPI() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);
  const { results } = await response.json();
  results.forEach((resident) => delete resident.residents);

  return results;
}
