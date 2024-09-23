import { Country } from "../types/country";

export const sortCountriesByPopulation = (
  countries: Country[],
  order: "asc" | "desc"
) => {
  return countries.sort((a, b) =>
    order === "asc" ? a.population - b.population : b.population - a.population
  );
};

export const filterCountriesByRegion = (
  countries: Country[],
  region: string
) => {
  return countries.filter((country) => country.region === region);
};
