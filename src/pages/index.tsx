import CountryCard from "@/components/CountryCard";
import { useFetchCountries } from "@/hooks/useFetchCountries";

const HomePage = () => {
  const { countries, loading, error } = useFetchCountries();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {countries?.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default HomePage;
