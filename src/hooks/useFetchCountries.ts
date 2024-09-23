import { useEffect, useState } from "react";
import { fetchCountries } from "@/services/api";
import { Country } from "@/types/country";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      setLoading(true);
      try {
        const response = await fetchCountries();
        setCountries(response);
      } catch (error) {
        setError("Error fetching country data");
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  return { countries, loading, error };
}