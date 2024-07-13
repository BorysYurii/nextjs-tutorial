import DrinksList from "../../components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch drinks...");
  const data = await response.json();
  return data;
};

const drinksPage = async () => {
  const data = await fetchDrinks();

  console.log(data);

  return (
    <div>
      <h1 className="text-5xl mb-8">DrinksPage</h1>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default drinksPage;
