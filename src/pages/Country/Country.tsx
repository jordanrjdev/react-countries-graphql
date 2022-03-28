import { Loading } from '@/components';
import { WithLayout } from '@/hocs';
import { useGetCountryQuery } from '@/services/graphql';
import { LinkTo } from '@/styled-components';
import { Link, Redirect, useRoute } from 'wouter';
import { Item } from './components';

const Country = () => {
  const [match, params] = useRoute('/country/:code');

  const { data, loading } = useGetCountryQuery({
    variables: { code: params?.code ?? '' }
  });

  return (
    <div className="mt-4">
      <Link href="/">
        <a className="inline-block sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
          Back to home
        </a>
      </Link>

      {loading && <Loading />}

      {!loading && data?.country && <Item country={data.country} />}

      {!loading && !data?.country && <Redirect to="/" />}
    </div>
  );
};
export default WithLayout(Country);
