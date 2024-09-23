import { Country } from "@/types/country";

interface CountryDetailsProps {
  country: Country;
}

const CountryDetails = ({ country }: CountryDetailsProps) => (
    <div className="country-details">
        <h2>{country.name.common}</h2>
        <p>Currencies: {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
        <p>Languages: {Object.values(country.languages).join(', ')}</p>
    <p>Time Zones: {country.timezones.join(', ')}</p>
    </div>
);

export default CountryDetails;