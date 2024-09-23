import { Country } from "@/types/country";
import { sortCountriesByPopulation } from "@/utils/country.utils";

const mockCountries: Country[] = [
  {
    name: { common: "Country A" },
    population: 1000,
    region: "Region",
    capital: [],
    flags: { png: "" },
    currencies: {},
    languages: {},
    timezones: [],
  },
  {
    name: { common: "Country B" },
    population: 5000,
    region: "Region",
    capital: [],
    flags: { png: "" },
    currencies: {},
    languages: {},
    timezones: [],
  },
];

test("sortCountriesByPopulation sorts by ascending order", () => {
  const sorted = sortCountriesByPopulation(mockCountries, "asc");
  expect(sorted[0].name.common).toBe("Country A");
});

test("sortCountriesByPopulation sorts by descending order", () => {
  const sorted = sortCountriesByPopulation(mockCountries, "desc");
  expect(sorted[0].name.common).toBe("Country B");
});
