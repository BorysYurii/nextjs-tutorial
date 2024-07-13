import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }: any) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink: any) => {
        return (
          <li key={drink.id}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <div className="relative h-72 w-72">
                    <Image
                      src={drink.strDrinkThumb}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                      alt={drink.strDrink}
                      className="rounded-md object-cover"
                    />
                  </div>
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{drink.strDrink}</h2>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
