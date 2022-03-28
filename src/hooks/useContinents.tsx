import { useContext, useState } from 'react';
import { GetAllContinentsDocument } from '@/services/graphql';
import { client } from '@/services';
import { CountryContext } from '@/contexts/countryContext';

const useContinents = () => {
  const { continents, setContinents } = useContext(CountryContext);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllContinents = async () => {
    setLoading(true);
    try {
      const response = await client.query({
        query: GetAllContinentsDocument
      });
      if (response.data.continents == null) return;
      setContinents(response.data.continents);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return { continents, getAllContinents, loading };
};

export default useContinents;
