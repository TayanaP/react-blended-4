import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { getTrendingCocktails } from "../api/cocktail-service";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCoctails] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getTrendingCocktails()
      .then((data) => setCoctails(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={cocktails} />
        {isLoading && <Loader />}
      </Section>
    </>
  );
};
