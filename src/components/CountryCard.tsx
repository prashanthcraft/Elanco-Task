import Image from "next/image";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {

    const flagUrl = country.flags?.png || '/default-flag.png';
    const countryCurrency = country?.currencies ? country?.currencies[Object.keys(country.currencies)[0]].name : ""; 
    const countryLanguage = country?.languages ? country.languages[Object.keys(country.languages)[0]] : "N/A"; 
    return(
    <div className="card">
      <Image
        src={flagUrl}
        alt={`Flag of ${country.name.common}`}
        width={300}
        height={200}
        layout="responsive"
      />
      <h2>{country.name.common}</h2>
      <p>Capital: {country?.capital?.join(", ")}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Currency: {countryCurrency}</p>
      <p>Language: {countryLanguage}</p>
      <p>Timezone: {country.timezones.join(", ")}</p>
    </div>
    );
};

export default CountryCard;