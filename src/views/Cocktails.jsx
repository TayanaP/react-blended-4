import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { searchByName } from "../api/cocktail-service";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Cocktails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCoctails] = useState([]);
  const [searchParams, setSerachParams] = useSearchParams();
  useEffect(() => 
  {
    const query = searchParams.get('cocktail');
    if (!query) return;
    searchByName(query).then(data => setCoctails(data.drinks)); 
  }, [searchParams])
  const onSubmit = (cocktail) => 
  {
    setSerachParams({ cocktail });
  }
  console.log(cocktails);
  return (
    <>
      <Section>
        <h1 className="uppercase text-4xl text-gray-600 text-center">
          Search Cocktails
        </h1>

        <SearchForm onSubmit={onSubmit} />
         <CocktailsList cocktails={cocktails} /> 
      </Section>
    </>
  );
};
