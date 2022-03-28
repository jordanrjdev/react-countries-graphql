import { CountryFragment } from '@/services/graphql';

interface ItemProps {
  country: CountryFragment;
}

const Item = ({ country }: ItemProps) => {
  return (
    <div className="bg-gray-100 rounded-lg p-10 flex flex-col items-center space-y-3">
      <h2 className="text-4xl font-black text-center">
        {country.name} {country.emoji}
      </h2>

      <div className="flex flex-col">
        <p>
          <span className="font-bold">Capital: </span>
          {country.capital ?? '-'}
        </p>

        <p>
          <span className="font-bold">Currency: </span>
          {country.currency ?? '-'}
        </p>

        <p>
          <span className="font-bold">Continent: </span>
          {country.continent.name + ' (' + country.continent.code + ')' ?? '-'}
        </p>

        <p>
          <span className="font-bold">Languages: </span>
          {country.languages.map((language) => language.name).join(', ') ?? '-'}
        </p>
      </div>
    </div>
  );
};

export default Item;
