import CountryDetails from "@/components/CountryDetails";
import { fetchCountries } from "@/services/api";
import { Country } from "@/types/country";
import { GetServerSideProps } from "next";

const CountryPage = ({ country }: {country: Country | null}) => {
    if(!country) {
        return <div>Country not found</div>;
    }
    return <CountryDetails country={country} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    console.log(params?.country);
    const countries = await fetchCountries();
    const countryParam = params?.country as string;
    const country = countries.find((c: Country) => c.name.common === countryParam) || null;

    return {
        props: {
            country: country,
        },
    };
};

export default CountryPage;